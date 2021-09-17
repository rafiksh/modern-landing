import React from "react";
import { Typography } from "antd";

import "./typography.css";

const { Text } = Typography;

const Title = ({ props, children }) => (
  <Text className="title" {...props}>
    {children}
  </Text>
);

const SubTitle = ({ props, children }) => (
  <Text className="subtitle" {...props}>
    {children}
  </Text>
);

const Paragraph = ({ props, children }) => (
  <Text className="paragraph" {...props}>
    {children}
  </Text>
);

export { Paragraph, Title, SubTitle };
