const TowerList = ({ className, children }) => {
  return (
    <div className={"py-5 sm:px-5 " + (className || "")}>
      <div className="tower-list-container py-5 sm:px-5 flex flex-wrap justify-center">
        {children}
      </div>
    </div>
  );
};

export default TowerList;
