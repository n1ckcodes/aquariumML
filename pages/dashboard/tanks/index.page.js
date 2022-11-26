import MaintenanceDashboard from "components/layouts/dashboard/DashboardLayout";
import { withSessionSsr } from "helpers/ironSession";
import Col from "react-bootstrap/Col";
import TankCard from "components/dashboard/TankCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import AddTankModal from "components/dashboard/AddTankModal";

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
  const handleClose = () => {
    setShow(false);
  };

  useEffect(async () => {
    //TODO: handle errors
    //TODO: use an isLoading state var so that "No tanks avail doesn't flicker while api call is being made"
    const tanks = await getUserTanks();
    setUserTanks(tanks);
  }, []);

  return (
    <MaintenanceDashboard user={user}>
      {show && <AddTankModal show={show} handleClose={handleClose} />}
      <Col xs={6}>
        <div>
          <FontAwesomeIcon
            style={{ fontSize: "3em", color: "gray" }}
            icon="filter"
            onClick={() => setShow(true)}
          />
          Sort by
        </div>
      </Col>
      <Col xs={6}>
        <div style={{ float: "right" }}>
          <FontAwesomeIcon
            style={{ fontSize: "3em", color: "green" }}
            icon="square-plus"
            onClick={() => setShow(true)}
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
    </MaintenanceDashboard>
  );
}
