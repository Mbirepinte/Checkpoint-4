import React from "react";
import { motion } from "framer-motion";

function Error() {
  return (
    <div>
      <motion.div
        className="page_createprofile"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Error
      </motion.div>
    </div>
  );
}

export default Error;
