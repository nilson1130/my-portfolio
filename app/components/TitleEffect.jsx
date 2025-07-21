"use client";
import { useEffect } from "react";

export default function TitleEffect() {
  useEffect(() => {
    document.title = "My Page";
  }, []);
  return null;
} 