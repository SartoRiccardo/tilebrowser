export default ({ name, value }) => {
  if (value === 1) return null;
  if (name == "Monkey Knowledge Disabled" && value) return null;
  if (name == "Selling Disabled" && !value) return null;

  return (
    <div>
      {typeof value === "boolean" ? (
        <>{name}</>
      ) : (
        <>
          {name}: <b>{value}</b>
        </>
      )}
    </div>
  );
};
