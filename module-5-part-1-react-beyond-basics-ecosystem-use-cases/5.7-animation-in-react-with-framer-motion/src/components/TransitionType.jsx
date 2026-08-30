import { motion } from "framer-motion";

const TransitionType = () => {
  return (
    <>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Learning Animation 1</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great 1
          .
        </p>
      </motion.div>

      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <h1>Learning Animation 2</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great 2.
        </p>
      </motion.div>

      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.8, duration: 2 }}
      >
        <h1>Learning Animation 3</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great 3.
        </p>
      </motion.div>
    </>
  );
};

export default TransitionType;
