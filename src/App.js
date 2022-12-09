import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { useTelegram } from "./components/hooks/useTelegram";

const App = () => {
  const { onToggleButton, tg } = useTelegram();

  useEffect((e) => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Gaga</button>
    </div>
  );
};

export default App;
