import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import MockTankData from "data/mockTanks.json";
import TankCard from "components/dashboard/TankCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function Tanks({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderController = () => {
    return (
      <MaintenanceDashboard>
        <Row>
          <div style={{ float: "right" }}>
            <FontAwesomeIcon icon="square-plus" onClick={handleShow} />
            add
          </div>
          <div style={{ float: "right" }}>
            <FontAwesomeIcon icon="filter" onClick={handleShow} />
            Sort by
          </div>
          <br />
        </Row>
        <Row style={{ margin: "0 auto" }}>
          {MockTankData.map((tank) => {
            return (
              <div style={{ display:"flex", justifyContent:"center",width: "100%", marginBottom: "4vh"  }}>
                <TankCard tank={tank} />
              </div>
            );
          })}
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </MaintenanceDashboard>
    );
  };
  return <html>{renderController()}</html>;
}
