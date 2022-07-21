import Link from "next/link";

export default function Header(props) {
    console.log(props)
  return (
    <>
      <Link href="/">
        <a>
            AquariumML
         
        </a>
      </Link>
      {!props.user ? (
        <span class="float-right inline-block">
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
