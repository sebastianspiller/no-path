"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const AnimationLottie = dynamic(() => import("./AnimationLottie"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen pt-1 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-1 justify-center">
        <AnimationLottie />
        <AnimationLottie />
      </main>
      <footer className="flex flex-col gap-2 justify-center items-center lg:items-start">
        <p className="text-sm text-gray-500">
          The way you see, it looks different.
        </p>
        <p className="text-sm text-gray-500">
          Will there be connection, where interpretation is?
        </p>
        <p className="text-sm text-gray-500">
          The more there is, the less there is.
        </p>
        <p className="text-sm text-gray-500">Too much information</p>
        <p className="text-sm text-gray-500">No words, just form.</p>
        <p className="mb-16 text-sm text-gray-500">tl;dr</p>
        <p className="text-sm underline text-gray-500">
          <Link href="/archive/2025-02-01-02">A link to no past.</Link>
        </p>
      </footer>
    </div>
  );
}
