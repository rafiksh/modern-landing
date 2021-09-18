import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import GooglePlay from "../../../assets/images/google-play.png";
import AppStore from "../../../assets/images/app-store.png";
import { SectionHeaderCard } from "../../../styled/card/card";

const AvialableComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Row
      id="avialable"
      className="avialable-container"
      justify="center"
      align="middle"
    >
      <SectionHeaderCard
        title={t("AVIALABLE_TITLE")}
        text={t("AVIALABLE_PARAGRAPH")}
        color="white"
      />

      <Col xs={24}>
        <Row justify="center">
          <img src={GooglePlay} alt="googleplay" />
          <Col xs={1} />
          <img src={AppStore} alt="appstore" />
        </Row>
      </Col>
    </Row>
  );
};

export { AvialableComponent };
