import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ativa o efeito apenas uma vez
    threshold: 0.4, // Dispara quando 10% do elemento estiver visível
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
