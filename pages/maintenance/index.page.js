import { withSessionSsr } from "helpers/ironSession";
import Layout from "components/layouts/MasterLayout";
import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import Container from "react-bootstrap/Container";

// export const getServerSideProps = withSessionSsr(
//   async function getServerSideProps({ req }) {
//     // if (!req.session.user) {
//     //   return {
//     //     redirect: {
//     //       permanent: false,
//     //       destination: "/",
//     //     },
//     //   };
//     // }
//     return {
//       props: {
//         user: req.session.user || null,
//       },
//     };
//   }
// );

export default function MaintenanceHome({ user }) {
  return <MaintenanceDashboard user={user}>🐟🐟🐟🐟</MaintenanceDashboard>;
}
