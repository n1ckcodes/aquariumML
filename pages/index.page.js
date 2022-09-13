import { withSessionSsr } from "../helpers/ironSession";
import { useRouter } from "next/router";
import DashboardLayout from "../components/layouts/dashboard/dashboard";
import Layout from "../components/layout";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroCarousel from "../components/carousel";
import FeaturedArticle from "../components/articles/featured";
import { Card } from "react-bootstrap";
import ArticleCard from "../components/articles/card";

const mockArticles = [
  {
    title: "article 1",
    blurb: "fresh water aquarium test",
  },
  {
    title: "article 2",
    blurb: "fresh water aquarium beginnners",
  },
  {
    title: "article 3",
    blurb: "fresh water aquarium planted tank",
  },
  {
    title: "article 4",
    blurb: "fresh water aquarium community tank",
  },
  {
    title: "article 5",
    blurb: "fresh water aquarium cichlids",
  },
  {
    title: "article 6",
    blurb: "fresh water aquarium plants",
  },
];

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

export default function Home({ user }) {
  const router = useRouter();

  //Will trigger page to rerender and run the SSR logic
  function refreshData() {
    console.log("refresh called");
    router.replace(router.asPath);
  }

  const renderController = () => {

      return (
        <Layout user={user}>
          <FeaturedArticle />
          <Row>
            {mockArticles.map((a) => {
              return (
                <Col sm={12} md={6} lg={4} style={{marginBottom:"2vh", marginTop:"2vh"}}>
                  <ArticleCard title={a.title} blurb={a.blurb} />
                </Col>
              );
            })}
          </Row>
        </Layout>
      );
    
  };
  return (
    <html data-theme="night" class="flex flex-col min-h-screen">
      {renderController()}
    </html>
  );
}
