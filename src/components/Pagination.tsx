import { useState } from "react";

export default function Pagination({
  page,
  characterCount,
  lastPage,
  onPageChange,
}: {
  page: number;
  characterCount: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}) {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  if (characterCount > 0 && lastPage > 1) {
    return (
      <nav className="flex items-center -space-x-px h-10 text-base justify-center">
        <button
          className="group"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-[--bg-black-01] group-disabled:text-[--bg-black-01] border border-e-0 border-[--orange-01] rounded-s-lg hover:text-[--orange-01]"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </button>
        <div>
          <a
            href="#"
            aria-current="page"
            className="z-10 flex items-center justify-center px-4 h-10 leading-tight border text-[--orange-01] border-[--orange-01]"
          >
            {currentPage}
          </a>
        </div>
        <button
          className="group"
          disabled={currentPage === lastPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-[--bg-black-01] border hover:text-[--orange-01] group-disabled:text-[--bg-black-01] border-[--orange-01] rounded-e-lg"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </button>
      </nav>
    );
  } else return null;
}
