import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "😭": "crying",
  "🍅":"Tomato",
  "💖": "love",
  "💔": "broken heart",
  "💌": "Love letter",
  "💋": "Kiss Mark",
  "🕶️":"Glasses ",
  "⚽":"FootBall",
  "😁": "happiness",

};
var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "(we dont have this in our data base)";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>(🐌Inside - outt!🎲) </h1>
      <input placeholder="search your emoji" onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3>emoji's We Know👇</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: " 0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
