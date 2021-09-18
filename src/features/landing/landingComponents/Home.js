import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title, Paragraph } from "../../../styled/typography/typography";
import { PrimaryButton } from "../../../styled/button/button";

import ThumbOne from "../../../assets/images/thumb-1.png";

const HomeComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Row
      id="home"
      className="home-container"
      justify="space-between"
      align="middle"
    >
      <Col xs={24} lg={12}>
        <Row justify="start">
          <Title>{t("HOME_TITLE")}</Title>
          <Col xs={24}>
            <Paragraph>{t("HOME_PARAGRAPH")}</Paragraph>
          </Col>
          <PrimaryButton>{t("GET_STARTED")}</PrimaryButton>
        </Row>
      </Col>

      <Col xs={0} lg={12}>
        <Row justify="center">
          <img src={ThumbOne} alt={"img"} />
        </Row>
      </Col>
    </Row>
  );
};

export { HomeComponent };
