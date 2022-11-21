import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Row from "react-bootstrap/Row";
 import Col from "react-bootstrap/Col";
 import MockTankData from 'data/mockTanks.json'


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
          {MockTankData.map(tank => {
            return <Col xs={6}>{tank.name}</Col>
          })}
        </Row>
      </MaintenanceDashboard>
    );
  };
  return <html>{renderController()}</html>;
}
