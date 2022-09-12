import { withSessionSsr } from "../helpers/ironSession";
import { useRouter } from "next/router";
import DashboardLayout from "../components/layouts/dashboard/dashboard";
import Layout from "../components/layout";
import LoginRegistrationContainer from "../components/auth/loginRegistrationContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/dashboard/home",
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
  const router = useRouter();

  //Will trigger page to rerender and run the SSR logic
  function refreshData() {
    console.log("refresh called");
    router.replace(router.asPath);
  }

  const renderController = () => {
    if (user) {
      return <DashboardLayout user={user} />;
    } else {
      return (
        <Layout user={user}>
          <Row>
            <Col xs={12} sm={10}>
              <h1>
                The only tool you will ever need to record all your aquarium
                maintenance.
              </h1>
            </Col>
            <Col xs={2}>
            </Col>
          </Row>
        </Layout>
      );
    }
  };
  return (
    <html data-theme="night" class="flex flex-col min-h-screen">
      {renderController()}
    </html>
  );
}
