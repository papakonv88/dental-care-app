import {Typography, Box} from "@mui/material";
import {motion} from "framer-motion";
import {Animations} from "./../animations/index.js";

function QuoteMain() {
    const quote = 'Our Advantages';
    const letters = quote.split('');
    const { textContainer, characters } = Animations;

    return (
       <Box sx={{ overflowY: 'hidden' }}>
        <Typography
            variant={'main'}
            component={motion.div}
            variants={textContainer}
            initial="hidden"
            animate="visible"
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

export default QuoteMain;