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
    (twr) => twr.isHero && twr.max === 0 && twr.tower !== "ChosenPrimaryHero"
  );
  const allowedHeros = dcModel.towers._items.filter(
    (twr) => twr.isHero && twr.max !== 0 && twr.tower !== "ChosenPrimaryHero"
  );
  let allowedTowers = dcModel.towers._items.filter(
    (twr) => !twr.isHero && twr.max !== 0
  );
  if (allowedHeros.length == 1) allowedTowers.splice(0, 0, allowedHeros[0]);
  const selectableHero = dcModel.towers._items.find(
    (twr) => twr.tower === "ChosenPrimaryHero" && twr.max != 0
  );
  if (selectableHero || allowedHeros.length > 1)
    allowedTowers.splice(0, 0, {
      tower: "ChosenPrimaryHero",
      isHero: true,
      max: 1,
    });

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
      <div className="specs-container flex flex-wrap sm:flex-nowrap sm:w-[80%] mx-auto p-4 sm:p-8">
        <Map
          map={data.GameData.selectedMap}
          startRound={dcModel.startRules.round}
          endRound={endRound}
          className="sm:w-[25%]"
        />
        <TowerList className="sm:w-[75%]">
          {allowedTowers.map((twr) => (
            <Tower
              key={twr.tower}
              name={twr.tower}
              max={twr.isHero ? -1 : twr.max}
            />
          ))}
        </TowerList>
      </div>
      {restrictedHeros.length > 0 && allowedHeros.length > 1 && (
        <div className="restricted-hero-container sm:w-[80%] mx-auto my-10 py-5">
          <p className="self-center text-center text-4xl my-0">
            Restricted Heroes
          </p>
          <TowerList className="">
            {restrictedHeros.map((twr) => (
              <Tower
                key={twr.tower}
                name={twr.tower}
                max={twr.isHero ? -1 : twr.max}
              />
            ))}
          </TowerList>
        </div>
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
