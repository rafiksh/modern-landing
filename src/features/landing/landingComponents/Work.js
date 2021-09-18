import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Card, SectionHeaderCard } from "../../../styled/card/card";

import DownloadIcon from "../../../assets/images/download.png";
import { ReactComponent as ArrowRightIcon } from "../../../assets/images/right-arrow.svg";

const WorkComponent = () => {
  const { t } = useTranslation(["landing"]);

  const work = [
    {
      key: 1,
      color: "white",
      Icon: () => (
        <img src={DownloadIcon} alt="download" className="card-icon" />
      ),
      title: t("STEP_ONE_TITLE"),
      text: t("STEP_ONE_TEXT"),
    },
    {
      key: 2,
      color: "white",
      Icon: () => (
        <img src={DownloadIcon} alt="download" className="card-icon" />
      ),
      title: t("STEP_TWO_TITLE"),
      text: t("STEP_TWO_TEXT"),
    },
    {
      key: 3,
      color: "white",
      Icon: () => (
        <img src={DownloadIcon} alt="download" className="card-icon" />
      ),
      title: t("STEP_THREE_TITLE"),
      text: t("STEP_THREE_TEXT"),
    },
  ];

  return (
    <Row id="work" justify="center" className="work-container">
      <SectionHeaderCard
        color="white"
        title={t("WORK_TITLE")}
        text={t("WORK_SUBTEXT")}
      />

      <Col xs={20}>
        <Row justify="space-between" align="middle">
          {work.map((props) => (
            <>
              <Col>
                <Card {...props} />
              </Col>
              {props.key !== work.length && (
                <Col>
                  <ArrowRightIcon style={{ width: 75, height: 75 }} />
                </Col>
              )}
            </>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export { WorkComponent };
