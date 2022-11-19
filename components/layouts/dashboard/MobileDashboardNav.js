import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  return (
    <nav style={{ borderRight: "solid lightgray 1px", height: "100vh" }}>
      <ul>
        <li>
          <FontAwesomeIcon icon="home" />{" "}
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon="fish" />
        </li>
        <li>
          <FontAwesomeIcon icon="tools" />
        </li>
        <li>
          <FontAwesomeIcon icon="gear" />
        </li>
      </ul>
    </nav>
  );
}
