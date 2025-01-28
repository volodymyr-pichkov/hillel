import { ThemeProvider } from "./context/ThemeContext";
import MainApp from "./components/MainApp";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
