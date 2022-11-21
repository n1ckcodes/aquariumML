import { useState, useEffect } from "react";
import Layout from "../MasterLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import DesktopDashboardNav from "./DesktopDashboardNav";
import MobileDashboardNav from "./MobileDashboardNav";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
export default function MaintenanceDashboard({ children, user }) {


  return (
    <Layout>
      <Row style={{ height: "100%" }}>
        {isBrowser ? 
          <Col sm={2} md={3} lg={4} xl={1}>
            <DesktopDashboardNav />
          </Col>
         : null }

        <Col>{children}</Col>
        {isMobile ? <MobileDashboardNav /> : <></>}
      </Row>
    
    </Layout>
  );
}
