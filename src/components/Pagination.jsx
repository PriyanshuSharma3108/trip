function Pagination({ totalTrips, tripsPerPage, page, setPage }) {
  const totalPages = Math.ceil(totalTrips / tripsPerPage);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
