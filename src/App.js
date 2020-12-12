import React, { useState } from "react";
import "./styles.css";

// var user = "Meet";
var emojiDictionary = {
  "😑": "annoying face",
  "😀": "happy",
  "🤔": "thinking",
  "😷": "face with mask",
  "😲": "ashotinshed face",
  "😡": "angry"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInput(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have it in database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h2>Emoji Interpreter</h2>
      <input onChange={emojiInput}></input>

      <h2>{meaning}</h2>

      <h2>Emojis We Know</h2>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
