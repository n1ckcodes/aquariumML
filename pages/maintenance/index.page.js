import { withSessionSsr } from "../../helpers/ironSession";
import Layout from "../../components/layouts/master";
import MaintenanceDashboard from '../../components/layouts/maintenanceDashboard'



export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    // if (req.session.user) {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/dashboard/home",
    //     },
    //   };
    // }
    return {
      props: {
        user: req.session.user || null,
      },
    };
  }
);

export default function MaintenanceHome({ user }) {


  return (
    <MaintenanceDashboard>🐟🐟🐟🐟</MaintenanceDashboard>
  );
}
