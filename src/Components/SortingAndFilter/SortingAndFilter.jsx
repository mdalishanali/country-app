import React from "react";

export const SortingAndFilter = ({
  handlePopNine,
  handlePopOne,
  handleSortAZ,
  handleSortZA,
}) => {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            handleSortAZ();
          }}
        >
          filter by country A-Z
        </button>
        <button
          onClick={() => {
            handleSortZA();
          }}
        >
          filter by country Z-A
        </button>

        <button
          onClick={() => {
            handlePopOne();
          }}
        >
          SortByPopulation 0-100(ASC)
        </button>
        <button
          onClick={() => {
            handlePopNine();
          }}
        >
          SortByPopulation 100-0(DSC)
        </button>
      </div>
    </div>
  );
};
