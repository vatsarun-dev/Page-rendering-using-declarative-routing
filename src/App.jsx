import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f5f6fa]">
      <Side click={click} />
      <div className="flex-1">
        <Navbar setClick={setClick} click={click} />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
