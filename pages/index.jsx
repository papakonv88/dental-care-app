import { Stack } from "@mui/material";

import Navigation from "./../components/Navigation/index.jsx";
import SectionFirst from "./../components/SectionFirst/index.jsx";
import SectionSecond from "./../components/SectionSecond/index.jsx";


const Wrapper = ({ children }) => (
  <Stack
    sx={{
      width: "100%",
      height: "100%",
      background: "background.default",
      overflowY: "hidden",
    }}
  >
    {children}
  </Stack>
);

function LandingPage() {
  return (
    <Wrapper>
      <Navigation />
          <SectionFirst />
          <SectionSecond />
    </Wrapper>
  );
}

export default LandingPage;
