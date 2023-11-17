import {Box, Typography, Stack} from "@mui/material";

const Icon = () => {
    return (
        <Box sx={(theme) => ({  width: '25px', height: '25px', backgroundColor: theme.palette.secondary.dark, borderRadius: '50%' })}/>
    )
}

function Logo() {
    return (
        <Stack direction={'row'} alignItems={'center'} columnGap={1}>
            <Icon />
            <Typography variant={'logo'}>denytech</Typography>
        </Stack>
    )
}

export default Logo