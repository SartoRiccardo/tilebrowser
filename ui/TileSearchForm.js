import { useState } from "react";

const TileSearchForm = (props) => {
  const CT34_START = new Date(1700604000000);
  const EVENTS =
    34 + Math.floor((new Date() - CT34_START) / (14 * 24 * 3600 * 1000)) + 1; // + 1 cause they get datamined

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
          className="pt-4 mx-0 sm:mx-4 px-1 sm:px-4"
        />
        <select
          name="ct-num"
          className="pt-4 mx-0 sm:mx-4 px-1 sm:px-4"
          onChange={onCtNumChange}
          value={ctNum}
        >
          {options}
        </select>
        <button className="pt-4 mx-0 sm:mx-4 px-1 sm:px-4">Search</button>
      </form>
    </div>
  );
};

export default TileSearchForm;
