import { useState } from "react";
import Header from "./Header";
import OpeningPage from "./OpeningPage";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);

  function handleToggleTheme() {
    setIsDark((dark) => !dark);
  }

  function handleContinueBtn() {
    if (!name) return;

    setOpen(false);
  }

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="bg-Gray50 dark:bg-Navy950 h-[100vh]">
        <Header onToggleTheme={handleToggleTheme} isDark={isDark} />

        {open && (
          <OpeningPage
            name={name}
            setName={setName}
            onContinueBtn={handleContinueBtn}
          />
        )}
      </div>
    </div>
  );
}
