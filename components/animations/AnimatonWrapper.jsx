import {motion} from "framer-motion";
import {Animations} from "./index.js";

function AnimationWrapper({children, animate}){
    return (
        <motion.div {...Animations[animate]}>
            {children}
        </motion.div>
    )
}

export default AnimationWrapper;