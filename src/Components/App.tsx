import { useState } from "react";
import Header from "./Header";
import OpeningPage from "./OpeningPage";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  function handleToggleTheme() {
    setIsDark((dark) => !dark);
  }
  return (
    <div className={`${isDark && "dark"}`}>
      <div className="bg-Gray50 dark:bg-Navy950 h-[100vh]">
        <Header onToggleTheme={handleToggleTheme} isDark={isDark} />
        <OpeningPage isDark={isDark} />
      </div>
    </div>
  );
}
