import React from "react";

export const SortingAndFilter = ({
  handlePopNine,
  handlePopOne,
  handleSortAZ,
  handleSortZA,
}) => {
  return (
    <div>
      <div className="sorting-cont">
        <button
          onClick={() => {
            handleSortAZ();
          }}
        >
          Filter country A-Z
        </button>
        <button
          onClick={() => {
            handleSortZA();
          }}
        >
          Filter The Country
        </button>

        <button
          onClick={() => {
            handlePopOne();
          }}
        >
          SortByPopulation (DSC)
        </button>
        <button
          onClick={() => {
            handlePopNine();
          }}
        >
          SortByPopulation(ASC)
        </button>
      </div>
    </div>
  );
};
