import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>AppVault</h1>
      <div>
        <button onClick={() => setIsOn((cur) => !cur)}>
          We are rocking! {isOn ? "😃" : "😭"}
        </button>
      </div>
    </>
  );
}

export default App;
