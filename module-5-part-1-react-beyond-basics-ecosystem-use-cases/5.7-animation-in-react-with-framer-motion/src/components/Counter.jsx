import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

const Counter = () => {
  const count = useMotionValue(1);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, []);

  return <motion.div>{roundedValue}</motion.div>;
};

export default Counter;
