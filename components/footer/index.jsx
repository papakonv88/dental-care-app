import {styled} from "@mui/system";
import {Stack} from "@mui/material";

import YourSmile from "./../../components/YourSmile/index.jsx";
import Social from "./../../components/Social/index.jsx";


const BottomContainer = styled(Stack)({
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
});

function Footer() {
    return (
        <BottomContainer direction={"row"}>
            <YourSmile />
            <Social />
        </BottomContainer>
    )
}

export default Footer;