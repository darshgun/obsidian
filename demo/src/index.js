import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Tag from "./components/Tag";
import "../../src/style/global.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Test Btn */}
        <Button type="button" value="value" variant="primary">
          Test btn
        </Button>

        {/* Test Tags */}
        <Tag>Default Tag</Tag>
        <Tag variant="primary">Primary tag</Tag>
      </header>
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
