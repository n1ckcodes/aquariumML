import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileDashboardNav(props) {
  const { pathname } = useRouter();
  return (
    <nav style={{ borderRight: "solid lightgray 1px", height: "100vh" }}>
      <FontAwesomeIcon icon="home" />
      <FontAwesomeIcon icon="fish" />
      <FontAwesomeIcon icon="tools" />
      <FontAwesomeIcon icon="gear" />
      <div>Test</div>

    </nav>
  );
}
