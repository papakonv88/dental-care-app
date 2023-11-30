import {Stack} from "@mui/material";

function SectionWrapper({children}) {
    return (
        <Stack sx={{
            position: 'relative',
            height: 'calc(100vh - 130px)',
            width: 'calc(100% - 100px)',
            margin: '80px 50px 50px 50px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </Stack>
    )
}

export default SectionWrapper;
