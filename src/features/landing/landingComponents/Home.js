import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import {
  Title,
  SubTitle,
  Paragraph,
} from "../../../styled/typography/typography";

import ThumbOne from "../../../assets/images/thumb-1.png";

const HomeComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Row id="home" justify="center">
      <Col xs={24}>hi</Col>
    </Row>
  );
};

export { HomeComponent };
