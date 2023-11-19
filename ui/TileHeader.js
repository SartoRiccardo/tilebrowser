import Image from "next/image";
import { IMG_BANNER, IMG_RELICS } from "./utils/images";

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

  let image = null;
  if (tileType == "Banner") {
    image = <img src={IMG_BANNER} className="tile-type h-[4rem] sm:h-[6rem]" />;
  } else if (tileType != "Regular" || tileType != "TeamFirstCapture") {
    image = (
      <img
        src={IMG_RELICS[tileType]}
        className="tile-type h-[4rem] sm:h-[6rem]"
      />
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        {image}
        <div className="flex">
          <span className="text-4xl self-center text-center px-4 py-0 my-0">
            CT {ctNum} - Tile {code}
          </span>
        </div>
      </div>
      {difficulty} - {gamemode} // {tileType}
      <br />
      {chalType > 1000 ? BOSSES[chalType - 1000] : CHAL_TYPES[chalType]}
    </div>
  );
};

export default TileHeader;
