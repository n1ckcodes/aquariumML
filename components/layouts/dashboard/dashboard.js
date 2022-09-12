import DashboardNav from "./dashboardNav";
import Header from "../../header";
export default function DashboardLayout({ children, user }) {
  console.log(user);
  return (
    <>
      <div>
        <div>
          <Header user={user} />
          <nav>
            <DashboardNav />
          </nav>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
