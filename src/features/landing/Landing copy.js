import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Drawer, Menu, Row } from "antd";
import { HashLink } from "react-router-hash-link";

import { StyledMenu } from "../../styled/menu/menu";
import { AboutComponent } from "./landingComponents";

import "./Landing.css";

const LandingComponent = () => {
  const { t, i18n } = useTranslation();

  const [width, setWidth] = useState(window.innerWidth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -84;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const renderMenu = (mode = "vertical") => (
    <StyledMenu mode={mode}>
      <Menu.Item key="what">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#what">
          {t("WHAT")}
        </HashLink>
      </Menu.Item>

      <Menu.Item key="lang" onClick={toggleLanguage}>
        {t("LANG")}
      </Menu.Item>
    </StyledMenu>
  );
  return (
    <>
      <Row align="middle" justify="center">
        <Col xs={5}>
          <AboutComponent />
        </Col>
        <Col xs={12}>{renderMenu("horizental")}</Col>
      </Row>
      <Drawer
        closeIcon={<>hi</>}
        placement={i18n.language === "en" ? "left" : "right"}
        closable={true}
        onClose={() => setIsDrawerOpen(false)}
        visible={isDrawerOpen && width <= 1200}
      >
        {renderMenu()}
      </Drawer>
    </>
  );
};

export { LandingComponent };
