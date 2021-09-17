import React from "react";
import { useTranslation } from "react-i18next";
import { Row } from "antd";

const AboutComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <>
      <Row align="middle" justify="center">
        {t("WELCOME")}
      </Row>
    </>
  );
};

export { AboutComponent };
