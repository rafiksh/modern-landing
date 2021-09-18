import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title, Paragraph } from "../../../styled/typography/typography";
import { PrimaryButton } from "../../../styled/button/button";

import ThumbOne from "../../../assets/images/thumb-1.png";

const ToolsComponent = () => {
  const { t } = useTranslation(["landing"]);

  return <Row id="tools" justify="space-between" align="middle"></Row>;
};

export { ToolsComponent };
