import React from "react";
import { motion } from "framer-motion";

export const AnimateAppearanceWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: {
          height: {
            duration: 0.4,
          },
          opacity: {
            duration: 0.25,
            delay: 0.15,
          },
        },
      }}
      exit={{
        opacity: 0,
        height: 0,
        transition: {
          height: {
            duration: 0.4,
          },
          opacity: {
            duration: 0.25,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
