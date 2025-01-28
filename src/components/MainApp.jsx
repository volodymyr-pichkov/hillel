import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const MainApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <motion.div
        className="p-6 rounded-2xl shadow-lg text-center"
        animate={{ scale: 1 }}
        initial={{ scale: 0.9 }}
      >
        <h1 className="text-2xl font-bold mb-4">Theme Context Example</h1>
        <p className="mb-6">Current theme: {theme}</p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Toggle Theme
        </button>
      </motion.div>
    </div>
  );
};

export default MainApp;
