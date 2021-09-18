import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title, Paragraph } from "../../../styled/typography/typography";
import { SecondaryButton } from "../../../styled/button/button";
import { Option, SectionHeaderCard } from "../../../styled/card/card";

import ThumbThree from "../../../assets/images/thumb-3.png";
import { ReactComponent as CheckmarkIcon } from "../../../assets/images/checkmark.svg";
import { ReactComponent as BellIcon } from "../../../assets/images/alarm.svg";
import { ReactComponent as VideoIcon } from "../../../assets/images/video.svg";

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
