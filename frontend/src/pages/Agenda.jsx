import Events from "@components/Events";
import Navbar from "@components/Navbar";
import { motion } from "framer-motion";
import React from "react";

function Agenda() {
  return (
    <motion.div
      className="page_createprofile"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Events />
    </motion.div>
  );
}

export default Agenda;
