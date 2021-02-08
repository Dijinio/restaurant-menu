import React from "react";

function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories.map((cat) => {
        return (
          <button
            key={cat}
            className="filter-btn"
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
