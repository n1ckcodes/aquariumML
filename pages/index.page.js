import { withSessionSsr } from "helpers/ironSession";
import Layout from "components/layouts/MasterLayout";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/dashboard",
        },
      };
    }
    return {
      props: {
        user: req.session.user || null,
      },
    };
  }
);

export default function Home({ user }) {
  return <Layout user={user}></Layout>;
}
