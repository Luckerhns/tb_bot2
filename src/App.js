import React, { useEffect } from "react";

const App = () => {
  useEffect((e) => {
    tg.ready();
  }, []);

  return <div className="App">work</div>;
};

export default App;
