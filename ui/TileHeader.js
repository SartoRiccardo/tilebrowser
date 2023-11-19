import Image from "next/image";
import { IMG_BANNER, IMG_RELICS, IMG_GAMEMODES } from "./utils/images";

const TileHeader = ({
  ctNum,
  code,
  tileType,
  difficulty,
  gamemode,
  chalType,
}) => {
  const BOSSES = ["Bloonarius", "Lych", "Vortex", "Dreadbloon", "Phayze"];
  const CHAL_TYPES = { 2: "Time Attack", 8: "Least Cash", 9: "Least Tiers" };

  let tileImage = null;
  if (tileType == "Banner") {
    tileImage = (
      <img src={IMG_BANNER} className="tile-type h-[4rem] sm:h-[6rem]" />
    );
  } else if (tileType != "Regular" || tileType != "TeamFirstCapture") {
    tileImage = (
      <img
        src={IMG_RELICS[tileType]}
        className="tile-type h-[4rem] sm:h-[6rem]"
      />
    );
  }

  let challengeImage = (
    <img
      src={IMG_GAMEMODES[chalType]}
      className="challenge-type pr-4 h-[4rem] sm:h-[6rem] self-center"
    />
  );

  return (
    <div>
      <div className="flex justify-center">
        {tileImage}
        <div className="flex">
          <p className="text-4xl self-center text-center px-4 py-0 my-0">
            CT {ctNum} - Tile {code}
          </p>
        </div>
      </div>
      <div className="challenge-type-container sm:w-[80%] mx-auto py-4 my-8 test flex justify-center">
        {challengeImage}
        <div className="flex">
          <p className="self-center text-center text-2xl my-0">
            {difficulty} - {gamemode}
            <br />
            {chalType > 1000 ? BOSSES[chalType - 1000] : CHAL_TYPES[chalType]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TileHeader;
