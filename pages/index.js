import { useRef, useState } from "react";
import TileSearchForm from "../ui/TileSearchForm";

const Home = () => {
  const [tileData, changeTileData] = useState({ error: false, tile: null });
  const [isLoading, changeIsLoading] = useState(false);

  let lastSearchId = useRef(0);

  const tileSearch = async (code, ctNum) => {
    const currentSearchId = Math.random();
    changeIsLoading(true);
    lastSearchId.current = currentSearchId;

    const response = await fetch(
      `https://storage.googleapis.com/btd6-ct-map/events/${ctNum}/tiles/${code.toUpperCase()}.json`
    );
    const tile = response.status == 200 ? await response.json() : null;

    if (lastSearchId.current != currentSearchId) return;

    changeIsLoading(false);
    changeTileData({ error: response.status != 200, tile });
  };

  return (
    <>
      <TileSearchForm onSubmit={tileSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>{JSON.stringify(tileData.error)}</div>
          <div>{JSON.stringify(tileData.tile)}</div>
        </>
      )}
    </>
  );
};

export default Home;
