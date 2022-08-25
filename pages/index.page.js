import Layout from "../components/layout";
import { withSessionSsr } from "../helpers/ironSession";
import DashboardLayout from "../components/layouts/dashboard/dashboard";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    return {
      props: {
        user: req.session.user || null,
      },
    };
  }
);

export default function Home({ user }) {
  console.log(user)
  console.log(user);
  return (
    <html data-theme="night">
      {user ? <DashboardLayout user={user} /> : <Layout user={user} />}
    </html>
  );
}
