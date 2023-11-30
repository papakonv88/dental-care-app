import SectionWrapper from "./../SectionWrapper.jsx";
import ScrollDown from "./ScrollDown/index.jsx";
import ImageMain from "./ImageMain/index.jsx";
import { imageData } from "./ImageMain/constants/data.jsx";
import QuoteMain from "./QuoteMain/index.jsx";
import Footer from './../footer/index.jsx'

function SectionFirst({ isActive }) {

  return (
    <>
      <SectionWrapper>
        {imageData.map((data, idx) => (
          <ImageMain
            key={`main_image_${idx}`}
            icon={data.icon}
            title={data.title}
            image={data.link}
            rotate={data.rotate}
            idx={idx}
          />
        ))}
        <QuoteMain isActive={isActive}/>
        <Footer />
      </SectionWrapper>
      <ScrollDown />
    </>
  );
}

export default SectionFirst;
