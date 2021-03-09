import { motion, AnimatePresence } from "framer-motion";
import Contactinfo from "./contactInfo.jsx";

const ContactBox = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        style={{ width: "500px" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.1, 0.9, 0.3, 0.9] }}
        exit={{ opacity: 0 }}
      >
        <Contactinfo />
      </motion.div>
    )}
  </AnimatePresence>
);

export default ContactBox;
