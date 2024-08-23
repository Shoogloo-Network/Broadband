import styles from './Pagination.module.scss';

const Pagination = ({
  items,
  currentPage,
  pageSize,
  onPageChange
}: {
  items: any;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pagesToShow = 5; // Change this number based on your requirement
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(startPage + pagesToShow - 1, pagesCount);

  return (
    <ul id={styles.pagination}>
      {/* Prev button */}
      <li className={currentPage === 1 ? styles.disabled : ""}>
        <a
          href="#"
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.pageLink}
        >
          Prev
        </a>
      </li>

      {/* Display page numbers */}
      {pages &&
        pages.slice(startPage - 1, endPage).map((page) => (
          <li key={page} className={page === currentPage ? styles.active : ""}>
            <a
              href="#"
              onClick={() => onPageChange(page)}
              className={styles.pageLink}
            >
              {page}
            </a>
          </li>
        ))}

      {/* Next button */}
      <li className={currentPage === pagesCount ? styles.disabled : ""}>
        <a
          href="#"
          onClick={() => onPageChange(currentPage + 1)}
          className={styles.pageLink}
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
