import React, { useState } from "react";

const Pagination = ({ page, setPage, maximo, paginate, porPage }) => {
  const [count, setCount] = useState(1);
  const nextPage = () => {
    if (count < maximo) {
      setCount(count + 1);
      setPage(page + 1);
    }
  };
  const previusPage = () => {
    if (count > 1) {
      setCount(count - 1);
      setPage(page - 1);
    }
  };
  const pageNumbers = [];
  for (let i = 1; i <= maximo; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pag">
      <button className="pag_b" onClick={previusPage}>
        <i className="bx bxs-chevron-left-circle"></i>
      </button>
      <nav className="pag_n">
        <ul className="pag_ul">
          {pageNumbers.map((number) => (
            <li className="pag_li" key={number}>
              <a className="pag_a" onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="pag_b" onClick={nextPage}>
        <i className="bx bxs-chevron-right-circle"></i>
      </button>
    </div>
  );
};

export default Pagination;
