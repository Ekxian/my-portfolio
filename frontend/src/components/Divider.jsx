import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="bg-dark p-5">
      <motion.div
        className="container"
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
      >
        <p className="text-white">
          <i>
            "I began with the basics, writing simple code and solving problems.
            <br />
            Through practice and projects, I grew my skills and explored new
            technologies."
          </i>
        </p>
      </motion.div>
    </div>
  );
};

export default Divider;
