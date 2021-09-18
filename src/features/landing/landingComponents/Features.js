import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Card } from "../../../styled/card/card";
import { Title, Paragraph } from "../../../styled/typography/typography";

import { ReactComponent as HomeLogo } from "../../../assets/images/home.svg";

const FeaturesComponent = () => {
  const { t } = useTranslation(["landing"]);

  const features = [
    {
      key: 1,
      Icon: HomeLogo,
      title: t("HOME_FEAT"),
      text: t("HOME_TEXT"),
    },
    {
      key: 2,
      Icon: HomeLogo,
      title: t("HOME_FEAT"),
      text: t("HOME_TEXT"),
    },
    {
      key: 3,
      Icon: HomeLogo,
      title: t("HOME_FEAT"),
      text: t("HOME_TEXT"),
    },
    {
      key: 4,
      Icon: HomeLogo,
      title: t("HOME_FEAT"),
      text: t("HOME_TEXT"),
    },
    {
      key: 5,
      Icon: HomeLogo,
      title: t("HOME_FEAT"),
      text: t("HOME_TEXT"),
    },
    {
      key: 6,
      Icon: HomeLogo,
      title: t("HOME_FEAT"),
      text: t("HOME_TEXT"),
    },
  ];

  return (
    <>
      <Row id="features" justify="center">
        <Col>
          <Title>{t("FEATURE_TITLE")}</Title>
          <Row justify="center">
            <Col xs={8} className="small-divider" />
          </Row>
          <Row justify="center">
            <Paragraph>{t("FEATURE_SUBTEXT")}</Paragraph>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        {features.map((props) => (
          <>
            <Col xs={8}>
              <Card {...props} />
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export { FeaturesComponent };
