import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

let memoryReviews: any[] = [];
const reviewsFilePath = path.join(process.cwd(), "src", "data", "reviews.json");
const tmpFilePath = path.join("/tmp", "reviews.json");

function getStoredReviews(): any[] {
  if (memoryReviews && memoryReviews.length > 0) {
    return memoryReviews;
  }
  try {
    if (fs.existsSync(tmpFilePath)) {
      const tmpData = fs.readFileSync(tmpFilePath, "utf-8");
      const parsed = JSON.parse(tmpData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryReviews = parsed;
        return memoryReviews;
      }
    }
  } catch (_) {}
  try {
    if (fs.existsSync(reviewsFilePath)) {
      const fileData = fs.readFileSync(reviewsFilePath, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        memoryReviews = parsed;
        return memoryReviews;
      }
    }
  } catch (error) {
    console.error("Error reading reviews file:", error);
  }
  return memoryReviews || [];
}

function saveReviews(reviews: any[]) {
  memoryReviews = reviews;
  let saved = false;
  try {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), "utf-8");
    saved = true;
  } catch (_) {
    // Expected on Vercel read-only filesystem, fallback to /tmp
  }
  try {
    fs.writeFileSync(tmpFilePath, JSON.stringify(reviews, null, 2), "utf-8");
    saved = true;
  } catch (_) {}
  return saved;
}

export async function GET() {
  const reviews = getStoredReviews();
  return NextResponse.json({
    success: true,
    reviews,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userName, userEmail, userAvatar, rating, serviceId, serviceName, title, comment } = body;

    if (!userName || !userEmail) {
      return NextResponse.json(
        { success: false, error: "Debes iniciar sesión con Google para comentar." },
        { status: 401 }
      );
    }

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: "La calificación debe ser entre 1 y 5 estrellas." },
        { status: 400 }
      );
    }

    if (!comment || comment.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "El comentario debe tener al menos 5 caracteres." },
        { status: 400 }
      );
    }

    const currentReviews = getStoredReviews();

    const newReview = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      userId: body.userId || `google-${Date.now()}`,
      userName: userName.trim(),
      userEmail: userEmail.trim(),
      userAvatar: userAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=3b82f6&color=fff`,
      rating: Number(rating),
      serviceId: serviceId || "general",
      serviceName: serviceName || "Servicio General",
      title: title ? title.trim() : "Opinión del servicio",
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
      verifiedWithGoogle: true,
    };

    const updatedReviews = [newReview, ...currentReviews];
    saveReviews(updatedReviews);

    return NextResponse.json({
      success: true,
      review: newReview,
      reviews: updatedReviews,
    });
  } catch (error) {
    console.error("Error posting review:", error);
    return NextResponse.json(
      { success: false, error: "Ocurrió un error al procesar tu reseña." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const userEmail = searchParams.get("userEmail");

    if (!id || !userEmail) {
      return NextResponse.json(
        { success: false, error: "Faltan parámetros requeridos." },
        { status: 400 }
      );
    }

    const currentReviews = getStoredReviews();
    const targetReview = currentReviews.find((r: any) => r.id === id);

    if (!targetReview) {
      return NextResponse.json(
        { success: false, error: "Reseña no encontrada." },
        { status: 404 }
      );
    }

    // Only allow deletion if user email matches or admin
    if (targetReview.userEmail !== userEmail && userEmail !== "jcarlos61200@gmail.com") {
      return NextResponse.json(
        { success: false, error: "No tienes autorización para eliminar esta reseña." },
        { status: 403 }
      );
    }

    const filtered = currentReviews.filter((r: any) => r.id !== id);
    saveReviews(filtered);

    return NextResponse.json({
      success: true,
      reviews: filtered,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error al eliminar reseña." },
      { status: 500 }
    );
  }
}
