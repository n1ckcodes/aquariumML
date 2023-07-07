import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "components/Tank/Card";

export default function Home() {
  return (
    <div>
      <header>
        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-3 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome back! 👋
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
