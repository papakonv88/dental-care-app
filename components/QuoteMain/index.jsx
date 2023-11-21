import {Typography, Box} from "@mui/material";
import {motion} from "framer-motion";

function QuoteMain() {
    const quote = 'Our Advantages';
    const letters = quote.split('');

    const container = {
        hidden: { },
        visible: (i = 1) => ({
            transition: { staggerChildren: 0.05, delayChildren: 0.05 * i, },
        }),
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: 300,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
       <Box sx={{ overflowY: 'hidden' }}>
        <Typography
            variant={'main'}
            component={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((char, idx) => (
                <motion.span
                    style={{ display: 'inline-block'}}
                    key={idx}
                    variants={characterAnimation}
                >
                    {char}
                </motion.span>
            ))}
        </Typography>
       </Box>
    )
}

export default QuoteMain;