import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div class="flex h-screen flex-col justify-between border-e bg-white">
      <div class="px-4 py-6">
        <span class="grid h-10 w-full place-content-center rounded-lg text-sm text-gray-600">
          <Link href="/" class="text-blue-600">
            AQUARIUM ML
          </Link>
        </span>

        <div class="sticky inset-x-0 bottom-0 border-b border-t mt-5 border-gray-100">
          <a
            href="#"
            class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <UserButton />

            <div>
              <p class="text-xs">
                <strong class="block font-medium">Test User</strong>

                <span> testuser@gmail.com </span>
              </p>
            </div>
          </a>
        </div>

        <ul class="mt-6 space-y-1">
          <li>
            <Link
              href="/"
              className={
                router.pathname == "/"
                  ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }
            >
              Home{" "}
              {router.pathname == "/" && (
                <span class="pl-3">
                  <object
                    id="svg1"
                    class="h-7 inline-flex"
                    data="images/fish-nav3.svg"
                    type="image/svg+xml"
                  ></object>
                </span>
              )}
            </Link>
          </li>

          <li>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span class="text-sm font-medium"> Tools </span>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul class="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href=""
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Water Change Calc
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Temp Conversions
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link
              href="/tank"
              className={
                router.pathname == "/tank" ||
                router.pathname.includes("/tank/[...id]")
                  ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  : "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }
              class=" "
            >
              Tanks{" "}
              {router.pathname.includes("/tank") && (
                <span class="pl-3">
                  <object
                    id="svg2"
                    class="h-7 inline-flex"
                    data="images/fish-nav3.svg"
                    type="image/svg+xml"
                  ></object>
                </span>
              )}
            </Link>
          </li>

          <li>
            <a
              href=""
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Data
            </a>
          </li>

          <li>
            <a
              href=""
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
