import { withSessionSsr } from "../helpers/ironSession";
import Layout from "../components/layouts/master";
import Button from 'react-bootstrap/Button';
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
           
              <div style={{color:"white", textAlign:"center",  marginTop:"20vh", marginBottom:"2vh"}}>
              <span className="hero1" style={{color:"white", fontSize:"4em", textAlign:"center"}}>Speak the language of aquarists.</span>
              <br/><br />
              AquariumQL is a comprehensive platform for aquarium guides, knowledge sharing, and managing your aquarium maintence schedule </div>
              <br /><br /><br />
              <Col lg={3} xl={3}></Col>
              <Col lg={6} xl={6} style={{textAlign:"center"}}> 
              <Button variant="secondary" style={{margin:"1vh"}} size="lg">Get Started</Button>
              <Button variant="secondary" size="lg"  style={{margin:"1vh"}}>
          Learn more
        </Button>
        </Col>
        <Col lg={3} xl={3}></Col>
            <Row>
              <Col lg={3} xl={3}></Col>
              <Col lg={6} xl={6}><br />
            {articles.map((a) => {
                return (
                  <Col sm={2}md={2} lg={5} xl={4} style={{margin:"2", display:"inline-block" }}>
                    <ArticleCard 

                      header={a.header}
                      title={a.title}
                      blurb={a.blurb}
                    />
                  </Col>
                );
              })}
              </Col>
              <Col lg={3} xl={3}></Col>
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
          </Row>
       </Layout>
    );
  };
  return <html>{renderController()}</html>;
}
