import Link from "next/link";
import Row from 'react-bootstrap/Row';
export default function Header(props) {
  return (
    <Row>
      <Link href="/">
            AquariumML
      </Link>
      {!props.user ? (
        <div class="flex">
          <Link href="/about">
            <a>About</a>
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/auth/login">
            <a>Contact Us</a>
          </Link>
          </div>
      ) : (
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
      )}{" "}
      </Row>
  );
}
