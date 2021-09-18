import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { Title } from "../../../styled/typography/typography";
import { PrimaryButton, SecondaryButton } from "../../../styled/button/button";
import { Option } from "../../../styled/card/card";

import ThumbTwo from "../../../assets/images/thumb-2.png";
import { ReactComponent as LayersIcon } from "../../../assets/images/layers.svg";
import { ReactComponent as BrushIcon } from "../../../assets/images/brush.svg";
import { ReactComponent as DropIcon } from "../../../assets/images/drop.svg";
import { ReactComponent as CartIcon } from "../../../assets/images/cart.svg";

const PhotosComponent = () => {
  const { t } = useTranslation(["landing"]);

  const photos = [
    {
      key: 1,
      text: t("PHOTOS_1"),
      Icon: () => <SecondaryButton Icon={LayersIcon} />,
    },
    {
      key: 2,
      text: t("PHOTOS_2"),
      Icon: () => <SecondaryButton Icon={BrushIcon} />,
    },
    {
      key: 3,
      text: t("PHOTOS_3"),

      Icon: () => <SecondaryButton Icon={DropIcon} />,
    },
    {
      key: 4,
      text: t("PHOTOS_4"),

      Icon: () => <SecondaryButton Icon={CartIcon} />,
    },
  ];
  return (
    <Row id="photos" align="top" className="photos-container">
      <Col lg={12}>
        <Title>{t("PHOTOS_TITLE")}</Title>
        {photos.map((props) => (
          <>
            <Option {...props} />
          </>
        ))}

        <PrimaryButton>{t("LEARN_MORE")}</PrimaryButton>
      </Col>
      <Col lg={12}>
        <Row justify="center">
          <img src={ThumbTwo} alt="img" />
        </Row>
      </Col>
    </Row>
  );
};

export { PhotosComponent };
