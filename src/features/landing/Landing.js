import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Drawer, Menu, Row, Button } from "antd";
import { HashLink } from "react-router-hash-link";

import { AboutComponent } from "./landingComponents";

import "./Landing.css";
import { LinkButton } from "../../styled/button/button";

const LandingComponent = () => {
  const { t, i18n } = useTranslation(["landing"]);

  const [width, setWidth] = useState(window.innerWidth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -84;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const renderMenuItems = () => (
    <>
      <Menu.Item key="about">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#home">
          {t("HOME")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="features">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#features">
          {t("FEATURES")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="pages">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#pages">
          {t("PAGES")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="screenshots">
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          smooth
          to="#screenshots"
        >
          {t("SCREENSHOTS")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="pricing">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#pricing">
          {t("PRICING")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="contact">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#contact">
          {t("CONTACT")}
        </HashLink>
      </Menu.Item>
    </>
  );
  return (
    <>
      <Row className="language-header" justify={"end"}>
        <LinkButton
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English
        </LinkButton>
        <LinkButton
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          العربية
        </LinkButton>
      </Row>
      <div className="landing-page">
        <Row
          className="landing-header"
          justify="space-between"
          align="middle"
          style={
            scrollPosition > 32 && {
              position: "fixed",
              top: 0,
            }
          }
        >
          <Col>
            <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#">
              <div className="logo">{t("LANDING")}</div>
            </HashLink>
          </Col>
          <Col>
            {width > 1230 && (
              <Menu mode="horizontal" className="landing-navbar">
                {renderMenuItems()}
              </Menu>
            )}

            {width <= 1230 && (
              <Button onClick={() => setIsDrawerOpen(true)}>Bye</Button>
            )}
          </Col>
        </Row>
        <div style={{ height: "1200px" }} />
        <div id="pricing"></div>

        <div style={{ height: "1200px" }} />
        {/* </Col> */}
      </div>

      <Drawer
        className="landing-drawer"
        closeIcon={<>hi</>}
        placement="right"
        closable={true}
        onClose={() => setIsDrawerOpen(false)}
        visible={isDrawerOpen && width <= 1230}
      >
        <Menu className="landing-navbar">{renderMenuItems()}</Menu>
      </Drawer>
    </>
  );
};

export { LandingComponent };
