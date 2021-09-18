import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { SectionHeaderCard } from "../../../styled/card/card";

const ContactComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Col id="contact" className="contact-container">
      <SectionHeaderCard
        title={t("CONTACT_TITLE")}
        text={t("CONTACT_SUBTEXT")}
      />

      <Row id="tools" align="top" className="contact-container">
        <Col lg={12}>
          <Row justify="center"></Row>
        </Col>
        <Col lg={12}>
          <Row justify="center"></Row>
        </Col>
      </Row>
    </Col>
  );
};

export { ContactComponent };
