import Main from "components/main/Main";
import Header from "components/header/Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
    <Main />
    </>
  );
}

export default App;
