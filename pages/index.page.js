import { withSessionSsr } from "../helpers/ironSession";
import Layout from "../components/layouts/master";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import articles from "../data/articles";
import FeaturedArticle from "../components/articles/featured";
import ArticleCard from "../components/articles/card";



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
        <FeaturedArticle />
        <Row>
          <Col xs={12} sm={3}>
          {articles.map((a) => {
            return (
              <Col
                xs={12}
                style={{ marginBottom: "2vh", marginTop: "2vh"}}
              >

                <ArticleCard title={a.title} thumbnail={a.thumbnail} blurb={a.blurb} tags={a.tags} />
              </Col>
            );
            
          })}
          </Col>
          <Col>OTher content</Col>
        </Row>
      </Layout>
    );
  };
  return (
    <html>
      {renderController()}
    </html>
  );
}
