import React from "react";
import { motion } from "framer-motion";
import { Compass, Brain, BookOpen } from "lucide-react";
const IconAnimations = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex  items-center gap-20">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Compass size={80} className="text-blue-600 " />
          
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          // className="flex items-center"
        >
          <Brain size={80} className="text-pink-600" />
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <BookOpen size={80} className="text-green-600" />
        </motion.div>
      </div>
    </div>
    
  );
};

export default IconAnimations;
