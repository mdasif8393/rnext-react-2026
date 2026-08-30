import { motion } from "motion/react";

const TextMotion = () => {
  const message = "we are Enjoying React Accelerator Course. LWS is Awesome!!!";

  const wordArray = message.split(" ");
  return (
    <div className="text-2xl m-4 text-center">
      {wordArray.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: index / 20,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextMotion;
