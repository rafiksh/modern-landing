import React from "react";
import { Typography } from "antd";

import "./typography.css";

const { Text } = Typography;

const Title = ({ props, children, color }) => (
  <Text className="title" {...props} style={color && { color: color }}>
    {children}
  </Text>
);

const SubTitle = ({ props, children, color }) => (
  <Text className="subtitle" {...props} style={color && { color: color }}>
    {children}
  </Text>
);

const Paragraph = ({ props, children, color }) => (
  <Text className="paragraph" {...props} style={color && { color: color }}>
    {children}
  </Text>
);

export { Paragraph, Title, SubTitle };
