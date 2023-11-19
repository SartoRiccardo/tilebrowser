export default ({ name, value }) => {
  if (value === 1) return null;
  if (name === "Monkey Knowledge Disabled" && value) return null;
  if (name === "Selling Disabled" && !value) return null;

  return (
    <li className="text-2xl">
      {typeof value === "boolean" ? (
        <>{name}</>
      ) : (
        <>
          {name}:{" "}
          <b>
            {name === "Starting Cash"
              ? `$${value}`
              : `${Math.floor(value * 100)}%`}
          </b>
        </>
      )}
    </li>
  );
};
