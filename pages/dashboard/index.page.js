import { withSessionSsr } from "helpers/ironSession";
// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import articles from "../data/articles";
// import FeaturedArticle from "../components/articles/featured";
// import ArticleCard from "../components/articles/card";
// import Image from "next/image";
// import Hero1 from "../public/images/hero.png";
// import HeroCarousel from "../components/carousel";

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    if (!req.session.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
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
        <Row className="row1">hehe</Row>
    );
  };
  return <html>{renderController()}</html>;
}
