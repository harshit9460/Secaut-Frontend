import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Pricing from "./pages/pricing";
import Documentation from "./pages/documentation";
import Login from "./pages/login";
import Register from "./pages/register";
import UMSDashboard from "./pages/u-m-s-dashboard";
import UMSViewProjectsBase from "./pages/u-m-s-view-projects-base";
import UMSTechnicalSupport from "./pages/u-m-s-technical-support";
import UMSSettingsAccount from "./pages/u-m-s-settings-account";
import UMSSettingsChangePlan from "./pages/u-m-s-settings-change-plan";
import UMSSettingsEditPaymentMe from "./pages/u-m-s-settings-edit-payment-me";
import UMSSettingsTnc from "./pages/u-m-s-settings-tnc";
import UMSViewProjectsManageMod from "./pages/u-m-s-view-projects-manage-mod";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/documentation":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/ums-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/ums-view-projects-base":
        title = "";
        metaDescription = "";
        break;
      case "/ums-technical-support":
        title = "";
        metaDescription = "";
        break;
      case "/ums-settings-account":
        title = "";
        metaDescription = "";
        break;
      case "/ums-settings-change-plan":
        title = "";
        metaDescription = "";
        break;
      case "/ums-settings-edit-payment-methods":
        title = "";
        metaDescription = "";
        break;
      case "/ums-settings-tnc":
        title = "";
        metaDescription = "";
        break;
      case "/ums-view-projects-manage-mode":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ums-dashboard" element={<UMSDashboard />} />
      <Route path="/ums-view-projects-base" element={<UMSViewProjectsBase />} />
      <Route path="/ums-technical-support" element={<UMSTechnicalSupport />} />
      <Route path="/ums-settings-account" element={<UMSSettingsAccount />} />
      <Route
        path="/ums-settings-change-plan"
        element={<UMSSettingsChangePlan />}
      />
      <Route
        path="/ums-settings-edit-payment-methods"
        element={<UMSSettingsEditPaymentMe />}
      />
      <Route path="/ums-settings-tnc" element={<UMSSettingsTnc />} />
      <Route
        path="/ums-view-projects-manage-mode"
        element={<UMSViewProjectsManageMod />}
      />
    </Routes>
  );
}
export default App;
