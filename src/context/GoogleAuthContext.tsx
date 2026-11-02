"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface GoogleUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GoogleAuthContextType {
  user: GoogleUser | null;
  isLoading: boolean;
  loginWithGoogleCredential: (credential: string) => void;
  loginWithDemoUser: (customName?: string, customEmail?: string) => void;
  logout: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const GoogleAuthContext = createContext<GoogleAuthContextType | undefined>(undefined);

// Helper to decode JWT payload safely
function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Failed to parse JWT:", e);
    return null;
  }
}

export function GoogleAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("jcah_google_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Error reading stored user:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loginWithGoogleCredential = (credential: string) => {
    const decoded = parseJwt(credential);
    if (decoded && decoded.email) {
      const newUser: GoogleUser = {
        id: decoded.sub || `google-${Date.now()}`,
        name: decoded.name || decoded.email.split("@")[0],
        email: decoded.email,
        avatar: decoded.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(decoded.name || "User")}&background=3b82f6&color=fff`,
      };
      setUser(newUser);
      localStorage.setItem("jcah_google_user", JSON.stringify(newUser));
      setIsLoginModalOpen(false);
    }
  };

  const loginWithDemoUser = (customName?: string, customEmail?: string) => {
    const name = customName?.trim() || "Usuario Google";
    const email = customEmail?.trim() || `usuario.${Math.floor(100 + Math.random() * 900)}@gmail.com`;
    const newUser: GoogleUser = {
      id: `google-demo-${Date.now()}`,
      name,
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3b82f6&color=fff&size=128&bold=true`,
    };
    setUser(newUser);
    localStorage.setItem("jcah_google_user", JSON.stringify(newUser));
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jcah_google_user");
  };

  return (
    <GoogleAuthContext.Provider
      value={{
        user,
        isLoading,
        loginWithGoogleCredential,
        loginWithDemoUser,
        logout,
        isLoginModalOpen,
        openLoginModal: () => setIsLoginModalOpen(true),
        closeLoginModal: () => setIsLoginModalOpen(false),
      }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
}

export function useGoogleAuth() {
  const context = useContext(GoogleAuthContext);
  if (!context) {
    throw new Error("useGoogleAuth must be used within a GoogleAuthProvider");
  }
  return context;
}
