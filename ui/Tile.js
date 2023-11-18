const Tile = ({ tile }) => {
  return (
    <>
      <TileHeader />
      <div>
        <Map />
        <TowerList>{<Tower />}</TowerList>
      </div>
      <hr />
      {<Restriction>Max Towers: 18</Restriction>}
    </>
  );
};

export default Tile;
