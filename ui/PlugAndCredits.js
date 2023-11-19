const PlugAndCredits = () => {
  return (
    <footer className="py-5">
      <h2 className="text-3xl text-center my-0">Credits</h2>
      <p className="text-xl my-0">
        App built by{" "}
        <a href="https://github.com/SartoRiccardo/tilebrowser">Chime</a> | Data
        reverse engineered by some anonymous guy
      </p>
      <br />
      <br />
      <h2 className="text-3xl text-center my-0">Other Resources</h2>
      <p className="text-xl my-0">
        <a href="https://docs.google.com/spreadsheets/d/1C9PHZ1QjiDCbEB-NrR4F7LJgowkm71-492yJOOQvqj8/edit?ouid=105866382831110567560&usp=sheets_home&ths=true">
          Spreadsheet version
        </a>{" "}
        with an explanation as to how tile generation works |{" "}
        <a href="https://discord.com/api/oauth2/authorize?client_id=1088892665422151710&permissions=8&scope=bot">
          CT Discord Bot
        </a>{" "}
        | <a href="https://btd6leaderboards.netlify.app/">BTD6 Leaderboards</a>{" "}
        <br /> <a href="https://data.ninjakiwi.com">NinjaKiwi Open Data API</a>{" "}
        (which this app does NOT use but it would be nice if it could make the
        jump)
      </p>
    </footer>
  );
};

export default PlugAndCredits;
