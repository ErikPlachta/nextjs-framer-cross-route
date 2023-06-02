"use client";
import { AnimatePresence } from "framer-motion";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <AnimatePresence initial={false} mode="wait">
    <section>{children}</section>
  </AnimatePresence>
  );
}