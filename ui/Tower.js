import { IMG_TOWERS } from "./utils/images";

const towerTypes = {
  HeliPilot: "military",
  MortarMonkey: "military",
  WizardMonkey: "magic",
  NinjaMonkey: "magic",
  BananaFarm: "support",
  SpikeFactory: "support",
  MonkeyVillage: "support",
  DartMonkey: "primary",
  BoomerangMonkey: "primary",
  BombShooter: "primary",
  TackShooter: "primary",
  IceMonkey: "primary",
  GlueGunner: "primary",
  SniperMonkey: "military",
  MonkeySub: "military",
  MonkeyBuccaneer: "military",
  MonkeyAce: "military",
  DartlingGunner: "military",
  SuperMonkey: "magic",
  Alchemist: "magic",
  Druid: "magic",
  EngineerMonkey: "support",
  BeastHandler: "support",
};

const Tower = ({ name, max }) => {
  return (
    <div className="py-3 px-2 sm:px-3 relative">
      <div
        className={`${
          towerTypes[name] || "hero"
        } flex self-center p-3 rounded-2xl h-[7rem] sm:h-[8rem] w-[5.5rem] sm:w-[6.5rem]`}
      >
        <img src={IMG_TOWERS[name]} className="self-center w-[100%]" />
        {max > 0 && (
          <div className="max-amount text-3xl">
            <p>{max}</p>
          </div>
        )}

        {name == "ChosenPrimaryHero" && (
          <p className="selectable text-2xl">Selectable</p>
        )}
      </div>
    </div>
  );
};

export default Tower;
