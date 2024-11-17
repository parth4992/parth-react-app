import { useState } from "react";
import NavBarWrapper from "./components/navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarWrapper />
    </>
  );
}

export default App;
