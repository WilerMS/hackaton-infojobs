import { type FC } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string | number
}

interface PaginationProps {
  page: number
  totalPages: number
  onChangePage: (page: number) => void
}

export const PaginationButton: FC<PaginationButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="h-[40px] w-[40px] rounded-lg border shadow-sm flex items-center justify-center hover:scale-105 transition disabled:bg-gray-100 disabled:shadow-none disabled:hover:scale-100">
      <span className="text-gray-500">{children}</span>
    </button>
  )
}

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  onChangePage
}) => {
  const goToPreviousPage = () => {
    if (page > 1) {
      onChangePage(page - 1)
    }
  }

  const goToNextPage = () => {
    if (page < totalPages) onChangePage(page + 1)
  }

  return (
    <div className='w-full h-[80px] pt-3 flex items-end justify-center gap-3'>
      <PaginationButton disabled={page === 1} onClick={goToPreviousPage}>
        <FaAngleLeft />
      </PaginationButton>

      <PaginationButton>
        { page }
      </PaginationButton>

      <PaginationButton disabled={[0, page].includes(totalPages)} onClick={goToNextPage}>
        <FaAngleRight />
      </PaginationButton>
    </div>
  )
}
