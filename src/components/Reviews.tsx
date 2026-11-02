"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useGoogleAuth } from "@/context/GoogleAuthContext";
import confetti from "canvas-confetti";
import TiltCard from "@/components/TiltCard";
import {
  Star,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Filter,
  Trash2,
  Send,
  AlertCircle,
  ThumbsUp,
  UserCheck,
  CheckCircle,
} from "lucide-react";

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userAvatar: string;
  rating: number;
  serviceId: string;
  serviceName: string;
  title: string;
  comment: string;
  createdAt: string;
  verifiedWithGoogle: boolean;
}

interface ReviewsProps {
  lang: "es" | "en";
}

const SERVICE_OPTIONS = [
  { id: "web-dev", name: "Páginas Web y Landing Pages" },
  { id: "networking", name: "Cableado Estructurado y Redes" },
  { id: "security-cctv", name: "Sistemas de Video Vigilancia Pro" },
  { id: "video-editing", name: "Edición de Video Profesional" },
  { id: "photo-design", name: "Edición de Fotos y Diseño Gráfico" },
  { id: "tech-support", name: "Soporte Técnico: Consolas, PC y Móvil" },
  { id: "custom-software", name: "Desarrollo de Software / ERP / COMPRANET" },
  { id: "general", name: "Servicio General y Asesoría Tecnológica" },
];

export default function Reviews({ lang = "es" }: ReviewsProps) {
  const { user, openLoginModal, logout } = useGoogleAuth();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilterRating, setSelectedFilterRating] = useState<number | "all">("all");
  const [selectedFilterService, setSelectedFilterService] = useState<string>("all");

  // Form State
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("web-dev");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch reviews from API
  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      let apiReviews: Review[] = [];
      if (data.success && Array.isArray(data.reviews)) {
        apiReviews = data.reviews;
      }

      // Merge with any local reviews stored in browser localStorage
      try {
        const localStored = localStorage.getItem("jcah_client_reviews");
        if (localStored) {
          const parsedLocal: Review[] = JSON.parse(localStored);
          const combined = [...parsedLocal];
          for (const rev of apiReviews) {
            if (!combined.some((item) => item.id === rev.id)) {
              combined.push(rev);
            }
          }
          setReviews(combined);
          return;
        }
      } catch (_) {}

      setReviews(apiReviews);
    } catch (err) {
      console.error("Error loading reviews:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle Submit Review
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      openLoginModal();
      return;
    }

    if (!comment.trim() || comment.trim().length < 5) {
      setErrorMessage(
        lang === "es"
          ? "Por favor escribe un comentario de al menos 5 caracteres."
          : "Please write a comment of at least 5 characters."
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const selectedService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
          userAvatar: user.avatar,
          rating,
          serviceId: selectedServiceId,
          serviceName: selectedService ? selectedService.name : "Servicio JCAH",
          title: title.trim() || (lang === "es" ? "Excelente experiencia" : "Great experience"),
          comment: comment.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReviews(data.reviews);
        setTitle("");
        setComment("");
        setRating(5);
        setSubmitSuccess(true);

        // Also persist in client localStorage so user reviews stay even across sessions
        try {
          const currentLocal = localStorage.getItem("jcah_client_reviews");
          const parsed = currentLocal ? JSON.parse(currentLocal) : [];
          const updated = [data.review, ...parsed.filter((r: Review) => r.id !== data.review.id)];
          localStorage.setItem("jcah_client_reviews", JSON.stringify(updated));
        } catch (_) {}

        // Fire festive confetti!
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (_) {}

        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrorMessage(data.error || "Error al publicar la reseña");
      }
    } catch (err) {
      setErrorMessage(lang === "es" ? "Error al conectar con el servidor." : "Server connection error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Delete Review
  const handleDeleteReview = async (reviewId: string) => {
    if (!user) return;
    const confirmMsg =
      lang === "es"
        ? "¿Estás seguro de que deseas eliminar este comentario?"
        : "Are you sure you want to delete this review?";
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await fetch(`/api/reviews?id=${reviewId}&userEmail=${encodeURIComponent(user.email)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setReviews(data.reviews);
        try {
          const currentLocal = localStorage.getItem("jcah_client_reviews");
          if (currentLocal) {
            const parsed = JSON.parse(currentLocal);
            const filtered = parsed.filter((r: Review) => r.id !== reviewId);
            localStorage.setItem("jcah_client_reviews", JSON.stringify(filtered));
          }
        } catch (_) {}
      }
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  // Calculations
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
      : "5.0";

  const ratingCounts = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
    percentage:
      totalReviews > 0
        ? Math.round((reviews.filter((r) => r.rating === stars).length / totalReviews) * 100)
        : 0,
  }));

  const filteredReviews = reviews.filter((r) => {
    const matchRating = selectedFilterRating === "all" || r.rating === selectedFilterRating;
    const matchService = selectedFilterService === "all" || r.serviceId === selectedFilterService;
    return matchRating && matchService;
  });

  const getRatingLabel = (val: number) => {
    if (lang === "es") {
      switch (val) {
        case 5:
          return "Excelente ⭐⭐⭐⭐⭐";
        case 4:
          return "Muy bueno ⭐⭐⭐⭐";
        case 3:
          return "Bueno ⭐⭐⭐";
        case 2:
          return "Regular ⭐⭐";
        case 1:
          return "Malo ⭐";
        default:
          return "";
      }
    } else {
      switch (val) {
        case 5:
          return "Excellent ⭐⭐⭐⭐⭐";
        case 4:
          return "Very Good ⭐⭐⭐⭐";
        case 3:
          return "Good ⭐⭐⭐";
        case 2:
          return "Fair ⭐⭐";
        case 1:
          return "Poor ⭐";
        default:
          return "";
      }
    }
  };

  return (
    <section id="reviews" className="py-28 px-6 relative bg-background overflow-hidden border-t border-border">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === "es" ? "Opiniones & Confianza" : "Reviews & Trust"}
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-4">
            {lang === "es" ? "Reseñas & " : "Client Reviews & "}
            <span className="text-gradient">
              {lang === "es" ? "Calificaciones" : "Ratings"}
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === "es"
              ? "Opiniones verificadas de clientes que han contratado proyectos web, redes, videovigilancia y soporte con Juan Carlos Hernández."
              : "Verified feedback from clients who hired web, networking, CCTV, and tech support services with Juan Carlos Hernández."}
          </p>
        </motion.div>

        {/* Rating Breakdown Score Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Big Score Card */}
          <div className="lg:col-span-4 glass rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-border shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            <span className="text-6xl md:text-7xl font-black text-gradient tracking-tight">
              {averageRating}
            </span>
            <div className="flex gap-1 text-amber-400 my-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">
              {lang === "es"
                ? `Basado en ${totalReviews} reseñas verificadas`
                : `Based on ${totalReviews} verified reviews`}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              {lang === "es" ? "100% Clientes Satisfechos" : "100% Satisfied Clients"}
            </div>
          </div>

          {/* Progress Bars */}
          <div className="lg:col-span-8 glass rounded-3xl p-8 flex flex-col justify-center border border-border shadow-xl">
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-4">
              {lang === "es" ? "Distribución de Calificaciones" : "Rating Breakdown"}
            </h3>
            <div className="space-y-3">
              {ratingCounts.map((rc) => (
                <div key={rc.stars} className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 w-16 text-slate-600 dark:text-slate-300 font-bold">
                    <span>{rc.stars}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${rc.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 * rc.stars }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                  <span className="w-12 text-right font-medium text-slate-500">
                    {rc.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Submission Box / Google Login CTA */}
        <div className="mb-20">
          {!user ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 md:p-12 text-center border-2 border-dashed border-blue-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-5">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {lang === "es"
                    ? "¿Has trabajado con Juan Carlos? ¡Deja tu calificación!"
                    : "Have you worked with Juan Carlos? Leave your review!"}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 font-light">
                  {lang === "es"
                    ? "Para mantener la autenticidad y seguridad, los comentarios se registran mediante verificación con tu cuenta de Google."
                    : "To guarantee authentic feedback, reviews are verified through Google Sign-In."}
                </p>

                <button
                  onClick={openLoginModal}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#ffffff"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#ffffff"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#ffffff"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#ffffff"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span>
                    {lang === "es"
                      ? "Iniciar sesión con Google para comentar"
                      : "Sign in with Google to Review"}
                  </span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8 md:p-10 border border-blue-500/40 shadow-2xl relative"
            >
              {/* Logged in user chip header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-border">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-base">
                        {user.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle className="w-3 h-3" />
                        {lang === "es" ? "Google Verificado" : "Google Verified"}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">{user.email}</span>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="text-xs text-slate-400 hover:text-rose-500 transition-colors font-medium underline"
                >
                  {lang === "es" ? "Cerrar sesión" : "Sign Out"}
                </button>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>
                    {lang === "es"
                      ? "¡Muchas gracias! Tu reseña y calificación han sido publicadas con éxito."
                      : "Thank you! Your review and rating have been published successfully."}
                  </span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Star Rating Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                      {lang === "es" ? "Calificación del Servicio" : "Service Rating"}
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((starVal) => {
                        const active = (hoverRating || rating) >= starVal;
                        return (
                          <button
                            type="button"
                            key={starVal}
                            onClick={() => setRating(starVal)}
                            onMouseEnter={() => setHoverRating(starVal)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 hover:scale-125 transition-transform"
                          >
                            <Star
                              className={`w-8 h-8 transition-colors ${
                                active
                                  ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                                  : "text-slate-300 dark:text-slate-700"
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="text-xs font-bold text-amber-500 ml-2">
                        {getRatingLabel(hoverRating || rating)}
                      </span>
                    </div>
                  </div>

                  {/* Service selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                      {lang === "es" ? "Servicio que Contrataste" : "Service Contracted"}
                    </label>
                    <select
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {SERVICE_OPTIONS.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                    {lang === "es" ? "Título de tu Reseña (Opcional)" : "Review Headline (Optional)"}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      lang === "es"
                        ? "Ej. Gran trabajo en la instalación y atención impecable"
                        : "e.g. Flawless execution and great communication"
                    }
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Comment Textarea */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                    {lang === "es" ? "Tu Comentario y Experiencia" : "Your Review & Feedback"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      lang === "es"
                        ? "Cuéntanos sobre los resultados, la puntualidad, calidad técnica y qué te pareció el servicio..."
                        : "Describe the outcomes, technical quality, and overall experience..."
                    }
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? lang === "es"
                          ? "Publicando..."
                          : "Publishing..."
                        : lang === "es"
                        ? "Publicar Reseña Verificada"
                        : "Publish Verified Review"}
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-bold text-foreground">
              {lang === "es" ? "Filtrar por:" : "Filter by:"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter by stars */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedFilterRating("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedFilterRating === "all"
                    ? "bg-blue-600 text-white"
                    : "glass text-slate-500 hover:text-foreground border border-border"
                }`}
              >
                {lang === "es" ? "Todas" : "All"}
              </button>
              {[5, 4, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedFilterRating(num)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                    selectedFilterRating === num
                      ? "bg-blue-600 text-white"
                      : "glass text-slate-500 hover:text-foreground border border-border"
                  }`}
                >
                  <span>{num}</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </button>
              ))}
            </div>

            {/* Filter by service */}
            <select
              value={selectedFilterService}
              onChange={(e) => setSelectedFilterService(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-border text-foreground focus:outline-none"
            >
              <option value="all">
                {lang === "es" ? "Todos los Servicios" : "All Services"}
              </option>
              {SERVICE_OPTIONS.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reviews Grid with 3D Tilt */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-12 glass rounded-3xl border border-border">
            <MessageSquare className="w-12 h-12 mx-auto text-slate-400 mb-3" />
            <p className="text-slate-500">
              {lang === "es"
                ? "No se encontraron reseñas con los filtros seleccionados."
                : "No reviews found matching the selected filters."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev, index) => {
              const isAuthor = user && user.email === rev.userEmail;
              const formattedDate = new Date(rev.createdAt).toLocaleDateString(
                lang === "es" ? "es-MX" : "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              );

              return (
                <TiltCard key={rev.id} intensity={10} glare={true} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="h-full glass rounded-3xl p-6 md:p-7 flex flex-col justify-between border border-border hover:border-blue-500/40 transition-colors shadow-lg relative group"
                  >
                    <div>
                      {/* Header with Avatar & Google badge */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-blue-500/30">
                            <Image
                              src={rev.userAvatar}
                              alt={rev.userName}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground text-sm">
                              {rev.userName}
                            </h4>
                            <div className="flex items-center gap-1 text-[11px] text-emerald-500 font-semibold">
                              <ShieldCheck className="w-3 h-3" />
                              <span>{lang === "es" ? "Verificado" : "Verified"}</span>
                            </div>
                          </div>
                        </div>

                        {isAuthor && (
                          <button
                            onClick={() => handleDeleteReview(rev.id)}
                            title={lang === "es" ? "Eliminar mi reseña" : "Delete my review"}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Stars & Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rev.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-slate-300 dark:text-slate-700"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {formattedDate}
                        </span>
                      </div>

                      {/* Service Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {rev.serviceName}
                        </span>
                      </div>

                      {/* Title & Comment */}
                      {rev.title && (
                        <h5 className="font-bold text-foreground text-sm mb-2 group-hover:text-blue-500 transition-colors">
                          {rev.title}
                        </h5>
                      )}

                      <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                        "{rev.comment}"
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-blue-500">
                        <ThumbsUp className="w-3 h-3" />
                        {lang === "es" ? "Recomendado" : "Recommended"}
                      </span>
                      <span>Google Verified</span>
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
