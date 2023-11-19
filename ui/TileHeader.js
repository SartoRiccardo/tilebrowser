const TileHeader = ({ tileType, difficulty, gamemode, chalType }) => {
  const BOSSES = ["Bloonarius", "Lych", "Vortex", "Dreadbloon", "Phayze"];
  const CHAL_TYPES = { 2: "Time Attack", 8: "Least Cash", 9: "Least Tiers" };

  if (tileType == "Banner") {
    // Banner
  } else if (tileType != "Regular" || tileType != "TeamFirstCapture") {
    // Relic
  }

  return (
    <div>
      {difficulty} - {gamemode} // {tileType}
      <br />
      {chalType > 1000 ? BOSSES[chalType - 1000] : CHAL_TYPES[chalType]}
    </div>
  );
};

export default TileHeader;
