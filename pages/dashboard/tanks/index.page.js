import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MockTankData from "data/mockTanks.json";
import TankCard from "components/dashboard/TankCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

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
    console.log(req.session.user);
    return {
      props: {
        user: req.session.user || null,
      },
    };
  }
);

export default function Tanks({ user }) {
  const getUserTanks = async () => {
    return axios
      .get(`/api/tanks/user/${user.UID}/all`, {})
      .then((results) => {
        return results.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [show, setShow] = useState(false);
  const [userTanks, setUserTanks] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    //TODO: handle errors
    const tanks = await getUserTanks()
    console.log(tanks)
    setUserTanks(tanks);
    console.log(userTanks)
  }, [userTanks]);

  return (
    <MaintenanceDashboard user={user}>
      <Col xs={6}>
        <div>
          <FontAwesomeIcon
            style={{ fontSize: "3em", color: "gray" }}
            icon="filter"
            onClick={handleShow}
          />
          Sort by
        </div>
      </Col>
      <Col xs={6}>
        <div style={{ float: "right" }}>
          <FontAwesomeIcon
            style={{ fontSize: "3em", color: "green" }}
            icon="square-plus"
            onClick={handleShow}
          />
        </div>
      </Col>
      {userTanks.length > 0 ? (
        userTanks.map((Tank) => {
          return (
            <Col xs={12} sm={6} md={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginBottom: "4vh",
                }}
              >
                <TankCard Tank={Tank} />
              </div>
            </Col>
          );
        })
      ) : (
        <p>No tanks found</p>
      )}

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
}
