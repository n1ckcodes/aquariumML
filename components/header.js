import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
export default function Header() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  return (
    <div class="bg-cyan-700 text-white flex flex-col justify-center text-xl text-size-100 h-20 w-full sticky top-0 ">
      <div class="place-content-start absolute left-0  pl-10">
        <Link href={"/"}>
          AQUARIUM QL
        </Link>
      </div>
      <div class="absolute right-0  pr-20 inline-flex ">
        {userId ? (
          <></>
        ) : (
          <>
            {" "}
            <Link href={"/sign-up"} class=" hover:text-cyan-400">
              Register
            </Link>{" "}
            &nbsp;| &nbsp;
            <Link href={"/sign-in"} class=" hover:text-cyan-400">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
