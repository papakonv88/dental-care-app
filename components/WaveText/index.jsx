import {Typography, Box} from "@mui/material";
import {motion} from "framer-motion";
import {Animations} from "./../animations/index.js";

function WaveText({ textStyle, quote, isActive }) {
    const letters = quote.split('');
    const { textContainer, characters } = Animations;

    return (
        <Box sx={{ overflowY: 'hidden' }}>
            <Typography
                variant={textStyle}
                component={motion.div}
                variants={textContainer}
                initial="hidden"
                animate={isActive ?'visible' : 'hidden'}
            >
                {letters.map((char, idx) => (
                    <motion.span
                        style={{ display: 'inline-block',  whiteSpace: 'pre' }}
                        key={`letter_${idx}`}
                        variants={characters}
                    >
                        {char}
                    </motion.span>
                ))}
            </Typography>
        </Box>
    )
}

export default WaveText;