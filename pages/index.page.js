import { withSessionSsr } from "../helpers/ironSession";
import { useRouter } from "next/router";
import DashboardLayout from "../components/layouts/dashboard/dashboard";
import Layout from "../components/layout";
import LoginRegistrationContainer from "../components/auth/loginRegistrationContainer";
import Hero from '../public/images/hero2.png'
import Image from "next/image";

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
      return (
        <div>
          <DashboardLayout user={user} />
        </div>
      );
    } else {
      return (
        <div>
          <Layout user={user}>
          <div class="grid grid-rows-2 grid-flow-col">
              <div class="row-span-2 pl-10 pr-10">

                  <Image
            class="inline-block"
            alt="Mountains"
            src={Hero}
            layout="responsive"
          />{" "}
                <h1 class="text-5xl  text-center">
                  The <span class="font-bold underline">only</span> tool you will ever need to record all your aquarium
                  maintenance.
                </h1>
              </div>
              <div class="row-span-2 col-span-2">
              <LoginRegistrationContainer />
              </div>
            </div>
          </Layout>
        </div>
      );
    }
  };
  return <html data-theme="night">{renderController()}</html>;
}
