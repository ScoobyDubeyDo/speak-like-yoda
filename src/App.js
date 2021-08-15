import "./styles.css";

import About from "./components/About";
import Heading from "./components/Heading";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Heading />
      <Main />
      <About />
    </div>
  );
}

export default App;
