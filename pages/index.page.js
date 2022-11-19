import React from "react";
import { withSessionSsr } from "helpers/ironSession";
import Layout from "components/layouts/MasterLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import articles from "data/articles";
import FeaturedArticle from "components/articles/featured";
import ArticleCard from "../components/articles/card";
import Image from "next/image";
import Hero1 from "../public/images/hero.png";
import HeroCarousel from "../components/carousel";

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
        <Row>
      
      </Row>
      </Layout>
    );
  };
  return <html>{renderController()}</html>;
}
