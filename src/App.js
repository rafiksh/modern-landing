import "./App.css";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(["common"]);

  return (
    <ConfigProvider direction={i18n?.dir()}>
      <div className="App">{t("HELLO")}</div>
    </ConfigProvider>
  );
};

export default App;
