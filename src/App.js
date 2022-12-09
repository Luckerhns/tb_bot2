import React, { useEffect } from "react";

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect((e) => {
    tg.ready();
  }, []);

  const onClose = () => tg.close();
  return (
    <div className="App">
      work
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default App;
