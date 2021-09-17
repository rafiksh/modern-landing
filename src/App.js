import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { LandingComponent } from "./features/landing/Landing";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  const { i18n } = useTranslation(["common"]);

  return (
    <ConfigProvider direction={i18n?.dir()}>
      <BrowserRouter>
        <LandingComponent />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
