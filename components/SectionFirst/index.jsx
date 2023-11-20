import SectionWrapper from './../SectionWrapper.jsx'
import Social from "./../../components/Social/index.jsx"
import {Stack, Typography} from '@mui/material'
import YourSmile from "./../../components/YourSmile/index.jsx";
import ScrollDown from "./../../components/ScrollDown/index.jsx";
import ImageMain from "./../../components/ImageMain/index.jsx";
import {imageData} from "./../../components/ImageMain/constants/data.jsx";

function SectionFirst() {
    return (
        <>
            <SectionWrapper>
                {imageData.map((data, idx) => (
                    <ImageMain key={`main_image_${idx}`} icon={data.icon} title={data.title} image={data.link}
                               rotate={data.rotate}/>
                ))}
                <ImageMain/>
                <Typography variant={'main'}>Our Advantages</Typography>
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