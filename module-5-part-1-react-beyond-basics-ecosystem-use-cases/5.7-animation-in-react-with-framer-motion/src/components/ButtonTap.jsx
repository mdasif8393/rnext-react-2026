import { motion } from "motion/react";

const ButtonTap = () => {
  return (
    <div className="m-4">
      <motion.button
        className="bg-black text-white p-1 border rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.4,
        }}
      >
        Tap Me
      </motion.button>

      <motion.button
        className="bg-black text-white p-1 border rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.4,
          transition: { yoyo: Infinity },
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
