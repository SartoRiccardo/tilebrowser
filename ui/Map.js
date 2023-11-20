import { IMG_MAPS } from "./utils/images";

const Map = ({ map, startRound, endRound, className }) => {
  return (
    <div className={"flex flex-col " + (className || "")}>
      <p className="text-center text-2xl my-0">
        Rounds: {startRound}/{endRound}
      </p>
      <img src={IMG_MAPS[map]} className="mx-auto w-[100%]" alt={map} />
    </div>
  );
};

export default Map;
