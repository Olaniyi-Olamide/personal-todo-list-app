import { useState } from "react";
import Header from "./Header";
import OpeningPage from "./OpeningPage";
import Loader from "./Loader";
import MainPage from "./MainPage";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const [loader, setLoader] = useState(false);
  const [loadMain, setLoadMain] = useState(false);

  function handleToggleTheme() {
    setIsDark((dark) => !dark);
  }

  function handleContinueBtn() {
    if (!name) return;

    setOpen(false);

    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setLoadMain(true);
    }, 2000);
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

        {loader && <Loader />}

        {loadMain && <MainPage name={name} />}
      </div>
    </div>
  );
}
