import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
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
    // if (!req.session.user) {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/",
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

export default function Tanks({ user }) {
  const renderController = () => {
    return (
      <MaintenanceDashboard>
        <Row style={{height:"75%"}}>
          <p
            style={{
              fontSize:"3em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="images/fish-bowl.png" /> <br /><br />
            <p>Things are looking pretty empty here...</p>
          </p>
        </Row>
      </MaintenanceDashboard>
    );
  };
  return <html>{renderController()}</html>;
}
