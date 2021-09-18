import React from "react";
import { Button, Space } from "antd";

import "./button.css";

const sizes = { small: "28px", middle: "38px", large: "50px" };

const PrimaryButton = ({ size = "large", icon, children, ...props }) => (
  <Button style={{ height: sizes[size] }} className={"primary"} {...props}>
    <Space direction="horizontal">
      {icon}
      {children}
    </Space>
  </Button>
);

const SecondaryButton = ({ size = "large", Icon, children, ...props }) => (
  <Button style={{ height: sizes[size] }} className={"secondary"} {...props}>
    <Space direction="horizontal">
      <Icon className="button-icon" />
      {children}
    </Space>
  </Button>
);

const LinkButton = (props) => (
  <Button type="link" className={"link"} {...props} />
);

export { PrimaryButton, LinkButton, SecondaryButton };
