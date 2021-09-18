import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Drawer, Menu, Row } from "antd";
import { HashLink } from "react-router-hash-link";

import {
  FeaturesComponent,
  HomeComponent,
  ToolsComponent,
  PhotosComponent,
  WorkComponent,
  AvialableComponent,
  PricingComponent,
  ContactComponent,
} from "./landingComponents";
import { LinkButton, PrimaryButton } from "../../styled/button/button";

import { ReactComponent as MenuIcon } from "../../assets/images/menu.svg";
import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg";

import "./Landing.css";

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
    setIsDrawerOpen(false);
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
      <Menu.SubMenu key="photos" title={t("PHOTOS")}>
        <Menu.Item>
          <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#photos">
            {t("PHOTOS")}
          </HashLink>
        </Menu.Item>
        <Menu.Item>
          <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#photos">
            {t("CAMERA")}
          </HashLink>
        </Menu.Item>
      </Menu.SubMenu>

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
      <Row justify="center" align="middle">
        <Col xs={22} lg={20}>
          <Row justify="end">
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
          <Row justify="end" align="middle">
            <Col>
              {width > 1230 && (
                <Menu mode="horizontal" className="landing-navbar">
                  {renderMenuItems()}
                </Menu>
              )}

              {width <= 1230 && (
                <LinkButton onClick={() => setIsDrawerOpen(true)}>
                  <MenuIcon style={{ height: 30, width: 30 }} />
                </LinkButton>
              )}
            </Col>
          </Row>
        </Col>

        <Col xs={22} lg={20}>
          <HomeComponent />
        </Col>

        <Col xs={22} lg={20}>
          <FeaturesComponent />
        </Col>

        <Col xs={24} className="grey-container">
          <Row justify="center">
            <Col xs={22} lg={20}>
              <ToolsComponent />
            </Col>
          </Row>
        </Col>

        <Col xs={22} lg={20}>
          <PhotosComponent />
        </Col>
        <Col xs={24} className="purple-container">
          <Row justify="center">
            <Col xs={22} lg={20}>
              <WorkComponent />
            </Col>
          </Row>
        </Col>
        <Col xs={24} className="grey-container">
          <Row justify="center">
            <Col xs={22} lg={20}>
              <PricingComponent />
            </Col>
          </Row>
        </Col>

        <Col xs={24} className="background-image">
          <Row justify="center">
            <Col xs={22} lg={20}>
              <AvialableComponent />
            </Col>
          </Row>
        </Col>

        <Col xs={22} lg={20}>
          <ContactComponent />
        </Col>
      </Row>

      {scrollPosition > 32 && (
        <PrimaryButton
          style={
            scrollPosition > 32 && {
              position: "fixed",
              bottom: 80,
              right: 0,
              width: 35,
              overflow: "hidden",
              borderRadius: "5px",
            }
          }
        >
          <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#">
            <ArrowUp style={{ position: "absolute", left: -10, top: 5 }} />
          </HashLink>
        </PrimaryButton>
      )}
      <Drawer
        className="landing-drawer"
        closeIcon={<>X</>}
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
