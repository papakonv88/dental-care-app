import SectionWrapper from './../SectionWrapper.jsx'
import Social from "./../../components/Social/index.jsx"
import {Stack} from '@mui/material'
import YourSmile from "./../../components/YourSmile/index.jsx";
import ScrollDown from "./../../components/ScrollDown/index.jsx";

function SectionFirst() {
    return (
        <>
            <SectionWrapper>
                <Stack sx={{position: 'absolute', bottom: 0, right: 0, width: '100%'}} direction={'row'}
                       justifyContent={'space-between'}>
                    <YourSmile/>
                    <Social/>
                </Stack>
            </SectionWrapper>
            <ScrollDown/>
        </>
    )
}

export default SectionFirst;