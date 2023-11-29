export const Animations = {
  fadeDown: {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
    },
  },
  fadeUp: {
    initial: {
      y: "100%",
      opacity: 0,
    },
    transition: {
      duration: 0.5,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    viewport: {
      once: true,
    },
  },
  growLeft: {
    animate: {
      scale: [0, 1, 1],
      x: [50, 50, 0],
    },
    transition: {
      times: [0, 0.5, 1],
      duration: 1,
    },
  },
  growToRight: {
    style: {
      overflowX: "hidden",
    },
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
    },
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
  outerCircle: {
    animate: {
      opacity: [0, 1, 1, 1],
      y: [-10, -10, 30, 30],
    },
    transition: {
      times: [0, 0.3, 1, 1],
      duration: 1,
      delay: 0.3,
    },
  },
  innerArrow: {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, 20, 20, 0],
    },
    transition: {
      times: [0, 0.5, 0.5, 1],
      duration: 1.5,
      repeat: Infinity,
      delay: 0.5,
    },
  },
  rotateScale: {
    initial: {
      rotate: -45,
      scale: 0,
    },
    transition: {
      duration: 0.5,
    },
    whileInView: {
      rotate: 0,
      scale: 1,
    },
    viewport: {
      once: true,
    },
  },
  scaleUp: {
    initial: {
      scale: 0,
    },
    transition: {
      duration: 0.5,
    },
    whileInView: {
      scale: 1,
    },
    viewport: {
      once: true,
    },
  },
  textContainer: {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.05, delayChildren: 0.05 * i },
    }),
  },
  characters: {
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
  },
  quoteSecondText: {
    initial: {
      y: 150,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  },
  textToRightSlow: {
    initial: {
      x: 0,
    },
    visible: {
      x: 350,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
  },
  textToRightFast: {
    initial: {
      x: 0,
    },
    visible: {
      x: 575,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
  },
  texToLeft: {
    initial: {
      x: 300,
    },
    visible: {
      x: 50,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
  },
};
