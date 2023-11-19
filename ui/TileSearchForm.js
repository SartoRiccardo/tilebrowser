import { useState } from "react";

const TileSearchForm = (props) => {
  const EVENTS = 34;

  const [code, changeCode] = useState("");
  const [ctNum, changeCtNum] = useState(EVENTS);

  const onCodeChange = (evt) => {
    if (evt.target.value.length > 3) return;
    changeCode(evt.target.value);
  };

  const onCtNumChange = (evt) => {
    changeCtNum(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(code, ctNum);
  };

  let options = [];
  for (let i = EVENTS; i > 0; i--)
    options.push(
      <option value={i} key={i}>
        CT {i}
      </option>
    );

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="py-8 text-1_5r sm:text-2r">
        <input
          type="text"
          value={code}
          onChange={onCodeChange}
          placeholder="Tile"
          name="code"
        />
        <select name="ct-num" onChange={onCtNumChange} value={ctNum}>
          {options}
        </select>
        <button>Search</button>
      </form>
    </div>
  );
};

export default TileSearchForm;