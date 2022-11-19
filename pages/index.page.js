import { withSessionSsr } from "helpers/ironSession";
import Layout from "components/layouts/MasterLayout";
import Row from "react-bootstrap/Row";

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
  const renderController = () => {
    return (
      <Layout user={user}>
        <Row></Row>
      </Layout>
    );
  };
  return <html>{renderController()}</html>;
}
