
type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = []
  const maxPageDisplay = 5

  const startPage = Math.max(currentPage - 2, 1)
  const endPage = Math.min(currentPage + 2, totalPages)

  if (endPage - startPage < maxPageDisplay - 1) {
    if (startPage === 1) {
      for (let i = startPage; i <= Math.min(startPage + maxPageDisplay - 1, totalPages); i++) {
        pageNumbers.push(i)
      }
    } else {
      for (let i = Math.max(endPage - maxPageDisplay + 1, 1); i <= endPage; i++) {
        pageNumbers.push(i)
      }
    }
  } else {
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }
  }

  return (
    <div className="flex justify-center space-x-2 p-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
      >
        Prev
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
