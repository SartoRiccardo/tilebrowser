import { useRef, useState } from "react";
import TileSearchForm from "@/ui/TileSearchForm";
import Loading from "@/ui/Loading";
import Error from "@/ui/Error";
import Tile from "@/ui/Tile";
import PlugAndCredits from "@/ui/PlugAndCredits";

const Home = () => {
  const [tileData, changeTileData] = useState({ error: false, tile: null });
  const [isLoading, changeIsLoading] = useState(false);

  let lastSearchId = useRef(0);

  const tileSearch = async (code, ctNum) => {
    code = code.toUpperCase();
    if (
      tileData.tile &&
      tileData.tile.Code === code &&
      tileData.tile.EventNumber === ctNum
    )
      return;

    const currentSearchId = Math.random();
    changeIsLoading(true);
    lastSearchId.current = currentSearchId;

    const response = await fetch(
      `https://storage.googleapis.com/btd6-ct-map/events/${ctNum}/tiles/${code}.json`
    );
    const tile = response.status == 200 ? await response.json() : null;

    if (lastSearchId.current != currentSearchId) return;

    changeIsLoading(false);
    changeTileData({ error: response.status != 200, tile });
  };

  return (
    <div id="root" className={`container mx-auto`}>
      <h1 className="text-center text-5xl mb-0 pb-0">CT Tile Search</h1>
      <TileSearchForm onSubmit={tileSearch} />
      {isLoading ? (
        <Loading />
      ) : tileData.error ? (
        <Error />
      ) : tileData.tile ? (
        <Tile data={tileData.tile} />
      ) : (
        <></>
      )}
      <PlugAndCredits />
    </div>
  );
};

export default Home;
