import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "Winking Face",
  "😕": "Confused Face",
  "😠": "Angry Face",
  "😂": "Joy",
  "🔥": "Fire",
  "🎉": "Party popper",
  "🤓": "Nerdy face",
  "🥳": "Partying face",
  "🤗": "	Hugs",
  "👽": "Alien",
   "🤙": "Call me hand"
  
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this emoji in there our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outtt</h1>
      <input onChange={emojiInputHandler}></input>
      <div>
        <h4>{meaning}</h4>
        <h3>Emoji we know</h3>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
