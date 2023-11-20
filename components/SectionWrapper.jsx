import {Stack} from "@mui/material";

function SectionWrapper({children}) {
    return (
        <Stack sx={{
            position: 'relative',
            height: 'calc(100vh - 100px)',
            width: 'calc(100% - 100px)',
            margin: '50px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </Stack>
    )
}

export default SectionWrapper;
