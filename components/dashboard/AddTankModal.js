import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

export default function AddTankModal({ show, handleClose }) {
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
      const { name, size, location, dateStarted } = values;
      axios
        .post("/api/tanks/add", {
          name: name,
          size: size,
          location: location,
          dateStarted: dateStarted,
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
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
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              onChange={formik.handleChange}
              value={formik.values.location}
              name="location"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date Started</Form.Label>
            <Form.Control
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dateStarted}
              name="dateStarted"
            />
          </Form.Group>

          {formik.touched.size && formik.errors.size ? (
            <div style={{ color: "red" }}>{formik.errors.size}</div>
          ) : null}

          <div className="d-grid gap-2">
            <Button variant="secondary" size="md" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
