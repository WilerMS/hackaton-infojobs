import { type ButtonHTMLAttributes, type FC } from 'react'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa'

interface PaginationButtonProps {
  children: JSX.Element | JSX.Element[] | string
}

export const PaginationButton: FC<PaginationButtonProps> = ({ children }) => {
  return (
    <button className="h-[40px] w-[40px] rounded-lg border shadow-sm flex items-center justify-center hover:scale-105 transition">
      <span className="text-gray-500">{children}</span>
    </button>
  )
}

export const Pagination = () => {
  return (
    <div className='w-full h-[80px] pt-3 flex items-end justify-center gap-3'>

      <PaginationButton>
        <FaAngleLeft />
      </PaginationButton>

      <PaginationButton>
        1
      </PaginationButton>

      <PaginationButton>
        2
      </PaginationButton>

      <PaginationButton>
        3
      </PaginationButton>

      <PaginationButton>
        <FaAngleRight />
      </PaginationButton>

    </div>
  )
}
