import { useState, useEffect } from "react";
import DesktopDashboardNav from "components/layouts/dashboard/DesktopDashboardNav";
import MobileDashboardNav from "components/layouts/dashboard/MobileDashboardNav";

export default function DashboardNavController() {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return mobileView ? <MobileDashboardNav /> : <DesktopDashboardNav />;
}
