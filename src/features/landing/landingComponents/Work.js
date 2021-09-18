import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Card, SectionHeaderCard } from "../../../styled/card/card";

import DownloadIcon from "../../../assets/images/download.png";
import { ReactComponent as ArrowRightIcon } from "../../../assets/images/right-arrow.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/images/arrow-down.svg";

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
          {work.map(({ key, ...props }) => (
            <React.Fragment key={key}>
              <Col xs={24} lg={6}>
                <Row justify="center">
                  <Card {...props} />
                </Row>
              </Col>
              {key !== work.length && (
                <>
                  <Col xs={0} lg={2}>
                    <Row justify="center">
                      <ArrowRightIcon style={{ width: 75, height: 75 }} />
                    </Row>
                  </Col>
                  <Col xs={24} lg={0}>
                    <Row justify="center">
                      <ArrowDownIcon style={{ width: 75, height: 75 }} />
                    </Row>
                  </Col>
                </>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export { WorkComponent };
