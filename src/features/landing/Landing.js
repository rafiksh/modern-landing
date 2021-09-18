import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Drawer, Menu, Row, Button } from "antd";
import { HashLink } from "react-router-hash-link";

import {
  FeaturesComponent,
  HomeComponent,
  ToolsComponent,
  PhotosComponent,
  WorkComponent,
  AvialableComponent,
  PlansComponent,
  ContactComponent,
} from "./landingComponents";

import "./Landing.css";
import { LinkButton } from "../../styled/button/button";
import { SubTitle } from "../../styled/typography/typography";

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
      <Row justify={"end"}>
        <LinkButton
          onClick={() => {
            i18n.changeLanguage("en");
            window.location.reload();
          }}
        >
          English
        </LinkButton>
        <LinkButton
          onClick={() => {
            i18n.changeLanguage("ar");
            window.location.reload();
          }}
        >
          العربية
        </LinkButton>
      </Row>
      <Row align="middle" justify="center">
        <Col xs={22}>
          <Row justify="space-between" align="middle">
            <Col>
              <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#">
                <SubTitle>{t("LANDING")}</SubTitle>
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
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <HomeComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <FeaturesComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <ToolsComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <PhotosComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <WorkComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <PlansComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <AvialableComponent />
        </Col>

        <Col xs={22} lg={18} xl={22}>
          <ContactComponent />
        </Col>
      </Row>

      {scrollPosition > 32 && (
        <Button
          style={
            scrollPosition > 32 && {
              position: "fixed",
              bottom: 10,
              right: 80,
            }
          }
        >
          <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#">
            {t("HOME")}
          </HashLink>
        </Button>
      )}
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
