const RestrictedHeros = ({ children }) => {
  return (
    <div className="restricted-hero-container sm:w-[80%] mx-auto my-10 py-5">
      <p className="self-center text-center text-4xl my-0">Restricted Heroes</p>
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default RestrictedHeros;
