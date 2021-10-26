import { useEffect, useState } from "react";
import "../App.css";

function Pagination({ currentPage, changePage, pages }) {
    return (
        <nav>
            <ul className="PaginationBar">
                <li className="First">
                    <button onClick={() => changePage(1)}>First</button>
                </li>
                { currentPage - 1 >= 1 ? (
                    <li className="Previous">
                        <button onClick={() => changePage(currentPage - 1)}>
                            {currentPage - 1}
                        </button>
                    </li>
                ) : null}

                <li className="Current">
                    <button style={{ background: "#00AAFF" }}>
                        {currentPage}
                    </button>
                </li>
                { currentPage < pages ? (
                    <li className="Next">
                        <button
                            onClick={() =>
                                currentPage === pages
                                    ? changePage(pages)
                                    : changePage(currentPage + 1)
                            }
                        >
                            {currentPage + 1}
                        </button>
                    </li>
                    ) : null }
                <li className="Last">
                    <button onClick={() => changePage(pages)}>Last</button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
