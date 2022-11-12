import React, { useState } from "react";

const Pagination = ({ page, setPage, maximo, paginate, porPage }) => {
  const nextPage = () => {
    setPage(page + 1);
  };
  const previusPage = () => {
    setPage(page - 1);
  };
  const pageNumbers = [];
  for (let i = 1; i <= maximo; i++) {
    pageNumbers.push(i);
  }
  const onSpecificPage = (n) => {
    setPage(n);
  };
  return (
    <div className="pag">
      <button
        className={`pag_b ${page === 1 ? "is-disabled" : ""}`}
        onClick={previusPage}
      >
        <i className="bx bxs-chevron-left-circle"></i>
      </button>
      <ul className="pag_ul">
        {pageNumbers.map((number) => (
          <li className="pag_li" key={number}>
            <button
              className={`pag_but ${number === page ? "is-current" : ""}`}
              onClick={() => onSpecificPage(number, setPage(1))}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={`pag_b ${page >= pageNumbers.length ? "is-disabled" : ""}`}
        onClick={nextPage}
      >
        <i className="bx bxs-chevron-right-circle"></i>
      </button>
    </div>
  );
};

export default Pagination;
