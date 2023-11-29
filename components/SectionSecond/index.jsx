import SectionWrapper from "./../SectionWrapper.jsx";
import Social from "./../../components/Social/index.jsx";
import { Stack } from "@mui/material";
import YourSmile from "./../../components/YourSmile/index.jsx";
import { styled } from "@mui/system";
import QuoteSecond from "./QuoteSecond/index.jsx";
import GetStarted from "./GetStarted/index.jsx";

const BottomContainer = styled(Stack)({
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'flex-end'
});

function SectionSecond({ isActive }) {
    return (
        <>
            <SectionWrapper>
                <QuoteSecond isActive={isActive} />
                <BottomContainer direction={"row"}>
                    <YourSmile />
                 <GetStarted />
                    <Social />
                </BottomContainer>
            </SectionWrapper>
        </>
    );
}

export default SectionSecond;
