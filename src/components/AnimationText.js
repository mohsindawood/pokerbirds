import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Box } from "@mui/material";
const SLIDE_CHANGE_TIME_MS = 3000;
const scenes = [
  "Product Managment System",
  "React and Next.js",
  "Material UI components",
  "MongoDB & Mongoose",
  "Preinstalled APIs",
];
const Text = ({ ...props }) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      key={props.text}
      initial={{ y: "100%" }}
      exit={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h4" color="primary" fontWeight={400}>
        {props.text}
      </Typography>
    </motion.div>
  </AnimatePresence>
);
const useCycle = (options) => {
  const [index, setIndex] = React.useState(0);
  const currentOption = options[index];
  const cycle = () => {
    setIndex(index < options.length - 1 ? index + 1 : 0);
  };
  return [currentOption, cycle, index];
};

export default function AnimationText() {
  const [currentScene, setCurrentScene] = useCycle(scenes);
  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <Box overflow="hidden" display="inline-block">
      <Text text={currentScene} />
    </Box>
  );
}
