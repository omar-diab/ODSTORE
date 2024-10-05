const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      {generatedPages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
