import React, { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
const tg = window.Telegram.WebApp;

const App = () => {
  const { onToggleButton, tg } = useTelegram();

  useEffect((e) => {
    tg.ready();
  }, []);

  return (
    <div className="App" onClick={onToggleButton}>
      toggle
    </div>
  );
};

export default App;
