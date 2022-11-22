import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MockTankData from "data/mockTanks.json";
import TankCard from "components/dashboard/TankCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <Row>
          <div style={{ float: "right" }}>
            <FontAwesomeIcon icon="square-plus" />
            add
          </div>
          <br />
        </Row>
        <Row>
          {MockTankData.map((tank) => {
            return <TankCard tank={tank} />;
          })}
        </Row>
      </MaintenanceDashboard>
    );
  };
  return <html>{renderController()}</html>;
}
