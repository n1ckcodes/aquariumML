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
           
              <div style={{color:"white", textAlign:"center",  marginTop:"20vh"}}>
              <span className="hero1" style={{color:"white", fontSize:"4em", textAlign:"center"}}>The language of aquarists.</span>
              <br/><br />
              AquariumQL is a comprehensive tool for managing your aquarium</div>
            
            </Col>
            <Col lg={5}>
              <Row>
            {articles.map((a) => {
                return (
                  <Col sm={2}md={2} lg={2} xl={2} style={{margin:"2vh auto", width:"50%" }}>
                    <ArticleCard
                      header={a.header}
                      title={a.title}
                      blurb={a.blurb}
                    />
                  </Col>
                );
              })}
              </Row>
              {" "}
      
              {/* <img
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
              /> */}
            </Col>
            <Col lg={5}> </Col>
          </Row>
       </Layout>
    );
  };
  return <html>{renderController()}</html>;
}
