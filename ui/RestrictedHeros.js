const RestrictedHeros = ({ heros }) => {
  return (
    <div>
      {heros.map((h) => (
        <p key={h.tower}>{h.tower}</p>
      ))}
    </div>
  );
};

export default RestrictedHeros;
