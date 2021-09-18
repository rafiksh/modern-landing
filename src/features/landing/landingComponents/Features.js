import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Card, SectionHeaderCard } from "../../../styled/card/card";

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
    <Row id="features" justify="space-between" align="middle">
      <SectionHeaderCard
        title={t("CONTACT_TITLE")}
        text={t("CONTACT_SUBTEXT")}
      />

      {features.map((props) => (
        <>
          <Col xs={8}>
            <Card {...props} />
          </Col>
        </>
      ))}
    </Row>
  );
};

export { FeaturesComponent };
