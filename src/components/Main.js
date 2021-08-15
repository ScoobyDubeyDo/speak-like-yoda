import { useState, useEffect } from "react";

const Main = () => {
  const url = "https://api.funtranslations.com/translate/yoda.json";
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");

  function editUrl(link, add) {
    return link + "?" + "text=" + add;
  }

  const translate = () => {
    fetch(editUrl(url, input))
      .then((json) => {
        return json.json();
      })
      .then((data) => setOutput(data.contents.translated))
      .catch((err) => {
        setOutput(
          "Reached the limit to use the app, you have.After an hour, come."
        );
        return console.log("Reached the limit to use the app", err);
      });
  };

  useEffect(() => {
    alert("In an hour, you can only use the app for 5 times,So use it wisely.");
  }, []);
  return (
    <div className="container">
      <textarea
        id="input-area"
        placeholder="Enter any text in English"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button id="con-btn" onClick={translate}>
        Convert to Yodish!!!
      </button>
      <p>Translation will come here 👇</p>
      <div id="output">{output}</div>
    </div>
  );
};

export default Main;
