import React, { useRef, useEffect } from "react";

function Search() {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  });
  return (
    <div className="search">
      <img
        alt="doodle"
        src="https://cdn.glitch.com/c1006b9c-3417-47d3-9272-958a9935b7ec%2Fcelebrating-subak-6753651837108453.2-2x.jpg?v=1593497990903"
      />
      <div className="input">
        <img
          alt="img"
          src="https://img.icons8.com/ios-glyphs/30/000000/search.png"
        />
        <input ref={input} type="text" />
        <img
          alt="img"
          src="https://cdn.glitch.com/c1006b9c-3417-47d3-9272-958a9935b7ec%2FGoogle-7.svg?v=1593507577459"
        />
      </div>
      <div>
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  );
}
export default Search;
