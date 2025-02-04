import classNames from 'classnames';
import './Pagination.style.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: number[];
}

export const Pagination = ({
  pages,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
        className="prev"
      >
        prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          disabled={currentPage === page}
          className={classNames('page', { active: currentPage === page })}
        >
          {page + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="next"
        disabled={currentPage === pages.length - 1}
      >
        next
      </button>
    </div>
  );
};
