import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Card, SectionHeaderCard } from "../../../styled/card/card";

import DownloadIcon from "../../../assets/images/download.png";
import { ReactComponent as ArrowRightIcon } from "../../../assets/images/right-arrow.svg";

const WorkComponent = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <Row id="work" justify="center" className="work-container">
      <SectionHeaderCard
        color="white"
        title={t("WORK_TITLE")}
        text={t("WORK_SUBTEXT")}
      />

      <Col xs={20}>
        <Row justify="space-between" align="middle">
          <Col>
            <Card
              color="white"
              Icon={() => (
                <img src={DownloadIcon} alt="download" className="card-icon" />
              )}
              title={t("STEP_ONE_TITLE")}
              text={t("STEP_ONE_TEXT")}
            />
          </Col>

          <Col>
            <ArrowRightIcon style={{ width: 75, height: 75 }} />
          </Col>
          <Col>
            <Card
              color="white"
              Icon={() => (
                <img src={DownloadIcon} alt="download" className="card-icon" />
              )}
              title={t("STEP_ONE_TITLE")}
              text={t("STEP_ONE_TEXT")}
            />
          </Col>
          <Col>
            <ArrowRightIcon style={{ width: 75, height: 75 }} />
          </Col>
          <Col>
            <Card
              color="white"
              Icon={() => (
                <img src={DownloadIcon} alt="download" className="card-icon" />
              )}
              title={t("STEP_ONE_TITLE")}
              text={t("STEP_ONE_TEXT")}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { WorkComponent };
