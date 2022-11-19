import Link from "next/link";
import { useRouter } from "next/router";

export default function DesktopDashboardNav(props) {
  const { pathname } = useRouter();
  return (
    <nav style={{ borderRight: "solid lightgray 1px", height: "100%" }}>
      <div>Test</div>
      <ul>
        <Link href="/dashboard">
          <a>
            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
              <li>Home</li>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
              <li>Tanks</li>
            </div>
          </a>
        </Link>
        <Link href="/dashboard/tools">
          <a>
            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
              <li>Tools</li>
            </div>
          </a>
        </Link>
        <Link href="#">
          <a>
            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
              <li>Settings</li>
            </div>
          </a>
        </Link>
      </ul>
    </nav>
  );
}
