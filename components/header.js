import Link from "next/link";

export default function Header(props) {
  return (
    <>
      <Link href="/">
        <a>
          <div class="w-full h-16 bg-black text-white flex items-center">
            AquariumML
          </div>
        </a>
      </Link>
      {!props.user ? (
        <span class="float-right">
          <Link href="/auth/login">
            <a>Login</a>
          </Link>
        </span>
      ) : (
        <span class="float-right">
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
        </span>
      )}{" "}
    </>
  );
}
