import Link from "next/link";

export default function Header(props) {
  return (
    <div class='grid grid-cols-12 col-span-12 h-20 flex'>
        <div class="col-span-11 flex pl-10">
      <Link href="/">
        <a class="flex items-center text-2xl">
            AquariumML
        </a>
      </Link>
      </div>
      {!props.user ? (
        <div class="flex">
          <Link href="/auth/login">
            <a class="flex items-center justify-end">Login</a>
          </Link>
          </div>
      ) : (
        <span class="float-right">
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
        </span>
      )}{" "}
    </div>
  );
}
