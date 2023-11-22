import SectionWrapper from "./../SectionWrapper.jsx";
import Social from "./../../components/Social/index.jsx";
import { Stack } from "@mui/material";
import YourSmile from "./../../components/YourSmile/index.jsx";
import { styled } from "@mui/system";
import QuoteSecond from "./../../components/QuoteSecond/index.jsx";

const BottomContainer = styled(Stack)({
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    justifyContent: "space-between",
});

function SectionSecond() {
    return (
        <>
            <SectionWrapper>
                <QuoteSecond />
                <BottomContainer direction={"row"}>
                    <YourSmile />
                    <Social />
                </BottomContainer>
            </SectionWrapper>
        </>
    );
}

export default SectionSecond;
