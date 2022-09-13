import React, { useState } from "react";
import "./styles.css";

function App() {
  let [task, setTask] = useState("");
  const [array, setArray] = useState([]);

  async function Fetch(url) {
    async function getJSON() {
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          setArray([...array, responseJson.result.full_short_link]);
          // console.log(responseJson.result.full_short_link);
          setTask("");
          return responseJson;
        });
    }
    await getJSON(); //wait for API to complete.
    // console.log(`I am from Fetch ${array}`);
  }

  function ShortenLink(urls) {
    if (!urls.replace(/\s+/g, " ").trim()) {
      alert("Enter valid url");
      return;
    }
    let url = `https://api.shrtco.de/v2/shorten?url=${urls}`;
    // console.log(`I am from Shorten ${url}`);
    Fetch(url);
    // console.log("Called Fetch");
  }
  return (
    <>
      <div>
        <div className="Container">
          <div className="input">
            <input
              placeholder="Paste url here... "
              id="shortLink"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            ></input>
            <button onClick={() => ShortenLink(task)}>shorten</button>
          </div>
          <div className="OutPut">
            {array
              .slice()
              .reverse()
              .map((ele, i) => {
                return (
                  <p key={i}>
                    <b>{ele}</b>
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
