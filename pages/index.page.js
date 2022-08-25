import { withSessionSsr } from "../helpers/ironSession";
import { useRouter } from "next/router";
import DashboardLayout from "../components/layouts/dashboard/dashboard";
import Layout from "../components/layout";
import LoginRegistrationContainer from "../components/auth/loginRegistrationContainer";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    console.log("rerendering");
    console.log(req.session.user);
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
      return (
        <div>
          <DashboardLayout user={user} />
        </div>
      );
    } else {
      return (
        <div>
          <Layout user={user}>
          <div class="grid grid-cols-4">
            <div class='col-span-3'>hello</div>
            <LoginRegistrationContainer />
            </div>
          </Layout>
        </div>
      );
    }
  };
  return <html data-theme="night">{renderController()}</html>;
}
