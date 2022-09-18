import { withSessionSsr } from "../../../helpers/ironSession";
import React, { useState } from "react";
import Layout from "../../../components/layouts/master";
import MaintenanceDashboard from "../../../components/layouts/maintenanceDashboard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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

export default function AddTank({ user }) {
  const radios = [
    { name: "Gallons", value: "gallons" },
    { name: "Liters", value: "liters" },
  ];

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  return (
    <MaintenanceDashboard user={user}>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Tank Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Tank 1, Office Tank, Johns Aquarium, etc..."
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Tank Size
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Size of tank in liters or gallons"
              />
              <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={
                      radioValue == radio.value
                        ? "outline-primary"
                        : "outline-secondary"
                    }
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Start Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                placeholder="When the tank was started"
              />
            </Col>
          </Form.Group>
      
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </MaintenanceDashboard>
  );
}
