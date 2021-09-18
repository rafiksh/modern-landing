import React from "react";
import { Row, Col, Space } from "antd";

import { Paragraph, SubTitle } from "../typography/typography";

import "./card.css";

const Card = (props) => {
  const { Icon, title, text, color } = props;
  return (
    <Row className={"card-box"} justify="center">
      <Space direction="vertical" align="center">
        {Icon && <Icon className="card-icon" />}
        {title && <SubTitle color={color}>{title}</SubTitle>}
        {text && <Paragraph color={color}>{text}</Paragraph>}
      </Space>
    </Row>
  );
};

const Option = (props) => {
  const { Icon, text } = props;
  return (
    <Row className="option-box" justify="start" align="middle">
      <Icon className="option-icon" />
      <Col xs={1} />
      <Paragraph>{text}</Paragraph>
    </Row>
  );
};

const PlanCard = ({ Icon, title, price, featureList, color }) => {
  return (
    <Row className="plan-box" justify="center">
      {Icon && <Icon />}
      <Col xs={24}>
        <Row justify="center">
          {title && <SubTitle color={color}>{title}</SubTitle>}
        </Row>
      </Col>
      {price && <SubTitle color={"#7d1be1"}>{price}</SubTitle>}
      {featureList.map(({ key, text }) => (
        <Col xs={24} key={key}>
          <Row justify="center">
            <Paragraph>{text}</Paragraph>
            <Col xs={24}>
              <Row justify="center">
                {key !== featureList.length && (
                  <Col xs={18} className="small-divider-white" />
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export { Card, Option, PlanCard };
