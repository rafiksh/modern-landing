import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title } from "../../../styled/typography/typography";
import { SecondaryButton } from "../../../styled/button/button";
import { Option } from "../../../styled/card/card";

import ThumbThree from "../../../assets/images/thumb-3.png";
import { ReactComponent as CheckmarkIcon } from "../../../assets/images/checkmark.svg";
import { ReactComponent as BellIcon } from "../../../assets/images/alarm.svg";
import { ReactComponent as VideoIcon } from "../../../assets/images/video.svg";

const ToolsComponent = () => {
  const { t } = useTranslation(["landing"]);

  const tools = [
    {
      key: 1,
      text: t("TOOLS_1"),
    },
    {
      key: 2,
      text: t("TOOLS_2"),
    },
    {
      key: 3,
      text: t("TOOLS_3"),
    },
    {
      key: 4,
      text: t("TOOLS_4"),
    },
  ];
  return (
    <Row id="tools" align="top" className="tools-container">
      <Col xs={0} lg={12}>
        <Row justify="center">
          <img src={ThumbThree} alt="img" />
        </Row>
      </Col>
      <Col xs={24} lg={12}>
        <Title>{t("TOOLS_TITLE")}</Title>
        {tools.map((props) => (
          <Option {...props} Icon={CheckmarkIcon} />
        ))}
        <Row>
          <SecondaryButton Icon={BellIcon} />
          <div style={{ width: 25 }} />
          <SecondaryButton Icon={VideoIcon} />
        </Row>
      </Col>
    </Row>
  );
};

export { ToolsComponent };
