import React, { useRef, useEffect } from "react";
import Doodle from "../assets/gg-img.jpg";
import MicIcon from "../assets/gg-mic";

function Search() {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  });
  return (
    <div className="search">
      <img alt="doodle" src={Doodle} />
      <div className="input">
        <img
          alt="img"
          src="https://img.icons8.com/ios-glyphs/30/000000/search.png"
        />
        <input ref={input} type="text" />
        <MicIcon />
      </div>
      <div>
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  );
}
export default Search;
