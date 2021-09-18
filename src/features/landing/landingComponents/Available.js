import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title, Paragraph } from "../../../styled/typography/typography";

import GooglePlay from "../../../assets/images/google-play.png";
import AppStore from "../../../assets/images/app-store.png";

const AvialableComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Row
      id="avialable"
      justify="center"
      align="middle"
      className="avialable-container"
    >
      <Col xs={24}>
        <Row justify="center">
          <Title color="white">{t("AVIALABLE_TITLE")}</Title>
        </Row>
      </Col>
      <Col xs={24}>
        <Row justify="center">
          <Paragraph color="white">{t("AVIALABLE_PARAGRAPH")}</Paragraph>
        </Row>
      </Col>
      <Col xs={24}>
        <Row justify="center">
          <img src={GooglePlay} alt="googleplay" />
          <img src={AppStore} alt="appstore" />
        </Row>
      </Col>
    </Row>
  );
};

export { AvialableComponent };
