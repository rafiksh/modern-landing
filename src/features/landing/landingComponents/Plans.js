import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title, Paragraph } from "../../../styled/typography/typography";
import { PlanCard } from "../../../styled/card/card";

import MotorBike from "../../../assets/images/motorbike.png";
import Bike from "../../../assets/images/bike.png";

const PlansComponent = () => {
  const { t } = useTranslation(["landing"]);

  const plans = [
    {
      key: 1,
      Icon: () => <img src={MotorBike} alt="bike" className="card-icon" />,
      title: t("BASIC"),
      price: t("48"),
      featureList: [
        { key: 1, text: t("BASIC_1") },
        { key: 2, text: t("BASIC_2") },
        { key: 3, text: t("BASIC_3") },
        { key: 4, text: t("BASIC_4") },
      ],
    },
    {
      key: 2,
      Icon: () => <img src={Bike} alt="bike" className="card-icon" />,
      title: t("PRO"),
      price: t("48"),
      featureList: [
        { key: 1, text: t("PRO_1") },
        { key: 2, text: t("PRO_2") },
        { key: 3, text: t("PRO_3") },
        { key: 4, text: t("PRO_4") },
      ],
    },
  ];

  return (
    <>
      <Col className="plans-container">
        <Row id="plans" justify="center">
          <Col>
            <Title>{t("PLANS_TITLE")}</Title>
            <Row justify="center">
              <Col xs={8} className="small-divider" />
            </Row>
            <Row justify="center">
              <Paragraph>{t("PLANS_SUBTEXT")}</Paragraph>
            </Row>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          {plans.map((props) => (
            <>
              <PlanCard {...props} />
              {props.key !== plans.length && <Col xs={1}></Col>}
            </>
          ))}
        </Row>
      </Col>
    </>
  );
};

export { PlansComponent };
