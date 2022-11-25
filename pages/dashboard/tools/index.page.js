import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MockTools from "data/mockTools.json";
import TankCard from "components/dashboard/TankCard";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

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

export default function Tools({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderController = () => {
    return (
      <MaintenanceDashboard user={user}>
        <Row>
          {MockTools.map((tank) => {
            return (
              <Col xs={6} sm={6} md={4}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginBottom: "4vh",
                  }}
                >
                  <TankCard tank={tank} />
                </div>
              </Col>
            );
          })}
        </Row>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Tank</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </MaintenanceDashboard>
    );
  };
  return <html>{renderController()}</html>;
}
