import React from "react";
import { Button, Space } from "antd";

import styles from "./button.css";

const sizes = { small: "28px", middle: "38px", large: "50px" };

const PrimaryButton = ({ size = "large", icon, children, ...props }) => (
  <Button style={{ height: sizes[size] }} className={styles.primary} {...props}>
    <Space direction="horizontal">
      {icon}
      {children}
    </Space>
  </Button>
);

const SecondaryButton = ({ size = "large", icon, children, ...props }) => (
  <Button
    style={{ height: sizes[size] }}
    className={styles.secondary}
    {...props}
  >
    <Space direction="horizontal">
      {icon}
      {children}
    </Space>
  </Button>
);

const LinkButton = (props) => (
  <Button type="link" className={styles.link} {...props} />
);

export { PrimaryButton, LinkButton, SecondaryButton };
