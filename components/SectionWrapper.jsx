import {Stack} from "@mui/material";

function SectionWrapper({ children }) {
    return (
        <Stack sx={{ position: 'relative', height: 'calc(100vh - 50px)', width: 'calc(100% - 100px)', margin: '0px 50px 50px 50px', }}>
            {children}
        </Stack>
    )
}

export default SectionWrapper;
