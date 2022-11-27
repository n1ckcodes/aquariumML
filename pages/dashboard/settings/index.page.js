import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Form from "react-bootstrap/Form";
import { sortTanksByFilterOpts } from "data/constants";
import Row from "react-bootstrap/Row";


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

export default function Settings({ user }) {
  const renderController = () => {
    return (
      <MaintenanceDashboard user={user}>
        <Row>
          <p>Settings page...</p>
          <p>
            Display Tank Size in:
            <Form.Select aria-label="Default select example">
              <option value="Gallons">Liters</option>
              <option value="Gallons">Gallons</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              {sortTanksByFilterOpts.map((opt) => (
                <option value={opt}>{opt}</option>
              ))}
            </Form.Select>
          </p>
        </Row>
      </MaintenanceDashboard>
    );
  };
  return <html>{renderController()}</html>;
}
