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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    //TODO: handle errors   
    //TODO: use an isLoading state var so that "No tanks avail doesn't flicker while api call is being made"
  //   const tanks = await getUserTanks();
  //   setUserTanks(tanks);
  // }, [userTanks]);
  }, [])
  const [registrationError, setRegistrationError] = useState(false);
  const validate = (values) => {
    const errors = {};

    if (!values.size) {
      errors.name = "Tank size is required";
    }

    if (!values.name) {
      errors.name = "Tank name is required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validate,
    onSubmit: (values) => {
      const { name, password, email } = values;
      axios
        .post("/api/auth/a", {
          name: name,
          password: password,
          email: email,
          name: name,
        })
        .then((response) => {
          if (response.data.status === "failure") {
            setRegistrationError(response.data.msg);
          }
          console.log(props);
          props.refreshData();
        })
        .catch((error) => {
          console.log(error);
          setRegistrationError(error.response.data);
        });
    },
  });

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
        <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Tank Name</Form.Label>
        <Form.Control
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
        />
      </Form.Group>
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}
      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Control
          type="text"
          onChange={formik.handleChange}
          value={formik.values.size}
          name="size"
        />
      </Form.Group>

      {formik.touched.size && formik.errors.size ? (
        <div style={{ color: "red" }}>{formik.errors.size}</div>
      ) : null}


      {registrationError && (
        <div class="text-red-400 font-bold mt-5">{registrationError}</div>
      )}
     <div className="d-grid gap-2">
      <Button
        variant="secondary"
        size="md"
        type="submit"
      >
        Save
      </Button>
    </div>
    </Form>
    </Modal.Body>
      </Modal>
    </MaintenanceDashboard>
  );
}
