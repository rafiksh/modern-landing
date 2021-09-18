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
      title: t("FEATURE_1_TITLE"),
      text: t("FEATURE_1_TEXT"),
    },
    {
      key: 2,
      Icon: HomeLogo,
      title: t("FEATURE_2_TITLE"),
      text: t("FEATURE_2_TEXT"),
    },
    {
      key: 3,
      Icon: HomeLogo,
      title: t("FEATURE_3_TITLE"),
      text: t("FEATURE_3_TEXT"),
    },
    {
      key: 4,
      Icon: HomeLogo,
      title: t("FEATURE_4_TITLE"),
      text: t("FEATURE_4_TEXT"),
    },
    {
      key: 5,
      Icon: HomeLogo,
      title: t("FEATURE_5_TITLE"),
      text: t("FEATURE_5_TEXT"),
    },
    {
      key: 6,
      Icon: HomeLogo,
      title: t("FEATURE_6_TITLE"),
      text: t("FEATURE_6_TEXT"),
    },
  ];

  return (
    <Row
      id="features"
      className="features-container"
      justify="space-between"
      align="middle"
    >
      <SectionHeaderCard
        title={t("FEATURES_TITLE")}
        text={t("FEATURES_SUBTEXT")}
      />
      {features.map(({ key, ...props }) => (
        <Col xs={24} lg={8} key={key + 1000}>
          <Card {...props} />
        </Col>
      ))}
    </Row>
  );
};

export { FeaturesComponent };
