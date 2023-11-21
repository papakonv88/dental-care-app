export const Animations = {
    fadeDown: {
        initial: {
            y: '-100%',
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        }
    },
    fadeUp: {
        initial: {
            y: '100%',
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        }
    },
    growLeft: {
        animate: {
            scale: [0 ,1 ,1],
            x: [50, 50, 0]
        },
        transition: {
            times: [0, 0.5, 1],
            duration: 1
        }
    },
    growToRight: {
        style: {
            overflowX: 'hidden'
        },
        initial: {
            width: 0
        },
        animate: {
            width: '100%'
        },
        transition: {
            duration: 0.5,
            delay: 0.6
        }
    },
    outerCircle: {
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: [0, 1, 1],
            y: [-10, -10, 30],
        },
        transition: {
            times: [0, 0.3, 1],
            duration: 1,
            delay: 0.2,
        }
    },
    innerArrow: {
        initial: {
            y: 0
        },
        animate: {
            y: [0 , 20, 20, 0]
        },
        transition: {
            times: [0, 0.5, 0.5, 1],
            duration: 1.5,
            repeat: Infinity,
            delay: 0.5
        }
    },
    rotateScale: {
        initial: {
            rotate: -45,
            scale: 0
        },
        animate: {
            rotate: 0,
            scale: 1
        },
        transition: {
            duration: 0.5
        }
    },
    scaleUp: {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1
        },
        transition: {
            duration: 0.5
        }
    },
    imageMain: {
        initial: {
            y: 300
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 1.5,
        }
    }
}

