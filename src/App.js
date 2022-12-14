import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π": "Smiling",
  "π": "Sad",
  "π­": "crying",
  "π":"Tomato",
  "π": "love",
  "π": "broken heart",
  "π": "Love letter",
  "π": "Kiss Mark",
  "πΆοΈ":"Glasses ",
  "β½":"FootBall",
  "π": "happiness",

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
      <h1>(πInside - outt!π²) </h1>
      <input placeholder="search your emoji" onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3>emoji's We Knowπ</h3>
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
