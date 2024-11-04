const Pagination = ({ currentPage, onPageChange }) => (
    <div className="flex justify-center mt-4 space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-white mt-2">{currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)} className=" px-4 py-2 bg-blue-500 text-white rounded ">
        Next
      </button>
    </div>
  );
  
  export default Pagination;
  