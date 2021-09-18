import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title, Paragraph } from "../../../styled/typography/typography";
import { PrimaryButton } from "../../../styled/button/button";

import ThumbOne from "../../../assets/images/thumb-1.png";

const FeaturesComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Row id="home" justify="space-between" align="middle">
      <Col>
        <Title>{t("HOME_TITLE")}</Title>
        <Col>
          <Paragraph>{t("HOME_PARAGRAPH")}</Paragraph>
        </Col>
        <PrimaryButton>{t("GET_STARTED")}</PrimaryButton>
      </Col>

      <Col>
        <img src={ThumbOne} alt={"img"} />
      </Col>
    </Row>
  );
};

export { FeaturesComponent };
