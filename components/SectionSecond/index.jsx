import SectionWrapper from "./../SectionWrapper.jsx";
import QuoteSecond from "./QuoteSecond/index.jsx";
import GetStarted from "./../../components/SectionSecond/GetStarted/index.jsx";
import Footer from "./../footer/index.jsx";

function SectionSecond({ isActive }) {
  return (
    <>
      <SectionWrapper>
        <QuoteSecond isActive={isActive} />
        <Footer />
        <GetStarted />
      </SectionWrapper>
    </>
  );
}

export default SectionSecond;
