"use client";
import ScrollToTop from "./helper/scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutClientFeatures() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
    </>
  );
} 