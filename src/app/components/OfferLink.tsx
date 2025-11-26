"use client";
import Link from "next/link";

export default function OfferLink() {
  return (
    <Link
      href="/offer"
      className="fixed right-4 bottom-4 z-50 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/10"
      aria-label="Договор-оферта"
    >
      Договор-оферта
    </Link>
  );
}
