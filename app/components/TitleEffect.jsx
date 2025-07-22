"use client";
import { useEffect } from "react";

export default function TitleEffect() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "My Page";
    }
  }, []);
  return null;
} 