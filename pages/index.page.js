import { withSessionSsr } from "../helpers/ironSession";
import Layout from "../components/layouts/master";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import articles from "../data/articles";
import FeaturedArticle from "../components/articles/featured";
import ArticleCard from "../components/articles/card";
import Image from "next/image";
import Hero1 from "../public/images/hero.png";
import HeroCarousel from "../components/carousel";

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
  const renderController = () => {
    return (
      <Layout user={user}>
          <Row>
            <Col lg={6}>
              {articles.map((a) => {
                return (
                  <Col style={{margin:"2vh auto", width:"75%" }}>
                    <ArticleCard
                      header={a.header}
                      title={a.title}
                      blurb={a.blurb}
                    />
                  </Col>
                );
              })}
            </Col>
            <Col lg={5}>
              {" "}
              <img
                className="img-fluid "
                alt="Vercel logo"
                src={"./images/hero7.jpg"}
              />
              <img
                className="img-fluid "
                alt="Vercel logo"
                src={"./images/hero5.jpg"}
              />{" "}
              <img
                className="img-fluid "
                alt="Vercel logo"
                src={"./images/hero4.jpg"}
              />
              <img
                className="img-fluid "
                alt="Vercel logo"
                src={"./images/hero6.jpg"}
              />
            </Col>
            <Col lg={5}> </Col>
          </Row>
      </Layout>
    );
  };
  return <html>{renderController()}</html>;
}
