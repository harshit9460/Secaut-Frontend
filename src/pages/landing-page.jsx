import Content from "../components/content";
import HeroContent from "../components/hero-content";
import FeaturesBackground from "../components/features-background";
import FaqContent from "../components/faq-content";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import "./landing-page.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="revolutionize-user-authenticat">
        Revolutionize user authentication effortlessly with our secure APIs. Say
        goodbye to authentication headaches!
      </h1>
      <Content />
      <img
        className="searching-network-icon"
        loading="lazy"
        alt=""
        src="/searchingnetwork.svg"
      />
      <HeroContent />
      <FeaturesBackground />
      <section className="question-header-wrapper">
        <div className="question-header">
          <h1 className="having-questions-about-container">
            <span>{`Having Questions About Us ? We Have Just The `}</span>
            <span className="right-answers-for">Right Answers For You.</span>
          </h1>
          <div className="animation-container">
            <img
              className="animation-container-child"
              alt=""
              src="/rectangle-36.svg"
            />
            <img
              className="animation-container-item"
              loading="lazy"
              alt=""
              src="/rectangle-37.svg"
            />
            <img
              className="httpslottiefilescomanimat-icon"
              loading="lazy"
              alt=""
              src="/httpslottiefilescomanimationsinformationsdwpt3iuga@2x.png"
            />
          </div>
        </div>
      </section>
      <FaqContent />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default LandingPage;
