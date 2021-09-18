import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { PlanCard, SectionHeaderCard } from "../../../styled/card/card";

import MotorBike from "../../../assets/images/motorbike.png";
import Bike from "../../../assets/images/bike.png";

const PlansComponent = () => {
  const { t } = useTranslation(["landing"]);

  const plans = [
    {
      key: 1,
      Icon: () => <img src={MotorBike} alt="bike" className="card-icon" />,
      title: t("BASIC"),
      price: t("BASIC_PRICE"),
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
      price: t("PRO_PRICE"),
      featureList: [
        { key: 1, text: t("PRO_1") },
        { key: 2, text: t("PRO_2") },
        { key: 3, text: t("PRO_3") },
        { key: 4, text: t("PRO_4") },
      ],
    },
  ];

  return (
    <Col id="plans" className="plans-container">
      <SectionHeaderCard title={t("PLANS_TITLE")} text={t("PLANS_SUBTEXT")} />

      <Row justify="center" align="middle">
        {plans.map((props) => (
          <>
            <PlanCard {...props} />
            {props.key !== plans.length && <Col xs={1}></Col>}
          </>
        ))}
      </Row>
    </Col>
  );
};

export { PlansComponent };
