import React from "react";
import { Row, Space } from "antd";

import { Paragraph, SubTitle } from "../typography/typography";

import "./card.css";

const Card = (props) => {
  const { Icon, title, text } = props;
  return (
    <Row className={"card-box"} justify="center">
      <Space direction="vertical" align="center">
        <Icon className={"card-icon"} />
        {title && <SubTitle>{title}</SubTitle>}
        <Paragraph>{text}</Paragraph>
      </Space>
    </Row>
  );
};

export { Card };
