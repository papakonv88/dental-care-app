import {Box} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ScrollDown() {
    return (
        <Box sx={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '1px solid #7E7D7F',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, 0)',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <ArrowDownwardIcon sx={{ color: '#7E7D7F', fontSize: '1.5rem' }}/>
        </Box>
    )
}

export default ScrollDown;