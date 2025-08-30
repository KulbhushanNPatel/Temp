import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass rounded-b-2xl mx-4 mt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <motion.button
          onClick={() => navigate("/")}
          className="text-2xl font-bold neon-text text-neon-purple"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          AyuraAhaar
        </motion.button>
        
        <div className="flex gap-3">
          <Button 
            variant={location.pathname === "/lookup" ? "neon" : "glass"}
            onClick={() => navigate("/lookup")}
          >
            Lookup
          </Button>
          <Button 
            variant={location.pathname === "/planner" ? "neon" : "glass"}
            onClick={() => navigate("/planner")}
          >
            Planner
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};