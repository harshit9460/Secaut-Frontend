import NavBar from "../components/nav-bar";
import Content1 from "../components/content1";
import FrameComponent1 from "../components/frame-component1";
import Footer1 from "../components/footer1";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <img className="pricing-child" alt="" src="/frame-40.svg" />
      <NavBar
        frameDivWidth="unset"
        frameDivPosition="sticky"
        frameDivAlignSelf="stretch"
        frameDivTop="0"
      />
      <Content1 />
      <FrameComponent1 />
      <Footer1 />
    </div>
  );
};

export default Pricing;
