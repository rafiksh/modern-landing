import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { Form, Input } from "antd";

import { SectionHeaderCard, Option } from "../../../styled/card/card";
import { Paragraph } from "../../../styled/typography/typography";
import { PrimaryButton } from "../../../styled/button/button";

import { ReactComponent as HomeLogo } from "../../../assets/images/home.svg";
import { ReactComponent as PhoneLogo } from "../../../assets/images/phone.svg";
import { ReactComponent as MailLogo } from "../../../assets/images/form-mail.svg";

const ContactComponent = () => {
  const { t } = useTranslation(["landing"]);

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${label} is required!",
    types: {
      // eslint-disable-next-line no-template-curly-in-string
      email: "${label} is not a valid email!",
      // eslint-disable-next-line no-template-curly-in-string
      number: "${label} is not a valid number!",
    },
    number: {
      // eslint-disable-next-line no-template-curly-in-string
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Row id="contact" className="contact-container">
      <SectionHeaderCard
        title={t("CONTACT_TITLE")}
        text={t("CONTACT_SUBTEXT")}
      />

      <Col xs={24} lg={12}>
        <Row justify="start">
          <Paragraph>{t("CONTACT_PARAGRAPH")}</Paragraph>
          <Col xs={24}>
            <Option Icon={HomeLogo} text={t("CONTACT_ADDRESS")} />
          </Col>
          <Col xs={24}>
            <Option Icon={PhoneLogo} text={t("CONTACT_MOBILE")} />
          </Col>
          <Col xs={24}>
            <Option Icon={MailLogo} text={t("CONTACT_EMAIL")} />
          </Col>
        </Row>
      </Col>
      <Col xs={24} lg={12}>
        <Row justify="center">
          <Col xs={18}>
            <Row justify="start">
              <Form
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                style={{ width: "100%" }}
              >
                <Form.Item name={"name"} rules={[{ required: true }]}>
                  <Input placeholder={t("NAME")} />
                </Form.Item>
                <Form.Item name={"email"} rules={[{ type: "email" }]}>
                  <Input placeholder={t("Email")} />
                </Form.Item>

                <Form.Item name={"subject"} rules={[{ type: "email" }]}>
                  <Input placeholder={t("Subject")} />
                </Form.Item>

                <Form.Item name={"introduction"}>
                  <Input.TextArea placeholder={t("MESSAGE")} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8 }}>
                  <PrimaryButton type="primary" htmlType="submit">
                    {t("SEND_MESSAGE")}
                  </PrimaryButton>
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { ContactComponent };
