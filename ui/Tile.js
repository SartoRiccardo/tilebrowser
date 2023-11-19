import Map from "@/ui/Map";
import TileHeader from "@/ui/TileHeader";
import TowerList from "@/ui/TowerList";
import Tower from "@/ui/Tower";
import RestrictedHeros from "@/ui/RestrictedHeros";
import Restriction from "@/ui/Restriction";

const Tile = ({ data }) => {
  const dcModel = data.GameData.dcModel;

  let chalType = data.GameData.subGameType;
  let endRound = dcModel.startRules.endRound;
  if ("bossData" in data.GameData) {
    chalType = 1000 + data.GameData.bossData.bossBloon;
    endRound = data.GameData.bossData.TierCount * 20 + 20;
  }

  const restrictedHeros = dcModel.towers._items.filter(
    (twr) => twr.isHero && twr.max == 0 && twr.tower != "ChosenPrimaryHero"
  );
  const allowedHeros = dcModel.towers._items.filter(
    (twr) => twr.isHero && twr.max != 0 && twr.tower != "ChosenPrimaryHero"
  );
  const allowedTowers = dcModel.towers._items.filter(
    (twr) => !twr.isHero && twr.max != 0
  );

  return (
    <>
      <TileHeader
        tileType={data.TileType == "Relic" ? data.RelicType : data.TileType}
        difficulty={data.GameData.selectedDifficulty}
        gamemode={data.GameData.selectedMode}
        chalType={chalType}
        ctNum={data.EventNumber}
        code={data.Code}
      />
      <div>
        <Map
          map={data.GameData.selectedMap}
          startRound={dcModel.startRules.round}
          endRound={endRound}
        />
        <TowerList>
          {allowedTowers.map((twr) => (
            <Tower key={twr.tower} name={twr.tower} max={twr.max} />
          ))}
        </TowerList>
      </div>
      {restrictedHeros.length > 0 && allowedHeros.length > 1 && (
        <RestrictedHeros heros={restrictedHeros} />
      )}
      <div>
        <Restriction
          name="Monkey Knowledge Disabled"
          value={dcModel.disableMK}
        />
        <Restriction name="Selling Disabled" value={dcModel.disableSelling} />
        <Restriction
          name="Ceramic Health"
          value={dcModel.bloonModifiers.healthMultipliers.bloons}
        />
        <Restriction
          name="Bloon Speed"
          value={dcModel.bloonModifiers.speedMultiplier}
        />
        <Restriction
          name="MOAB Speed"
          value={dcModel.bloonModifiers.moabSpeedMultiplier}
        />
        <Restriction
          name="Regrow Rate"
          value={dcModel.bloonModifiers.regrowRateMultiplier}
        />
      </div>
    </>
  );
};

export default Tile;
