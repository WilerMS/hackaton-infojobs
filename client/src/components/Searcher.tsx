import { useState, type FC } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
  value?: string
  onChange?: (value: string) => void
  onClickSearch?: (value: string) => void
}

const Searcher: FC<Props> = ({
  value = '',
  onChange = () => { },
  onClickSearch = () => { }
}) => {
  const [text, setText] = useState<string>(value)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
    onChange(e.currentTarget.value)
  }

  const handleClick = () => onClickSearch(text)

  return (
    <div className='w-full h-16 rounded-lg border flex overflow-hidden hover:shadow-sm transition'>
      <div className="w-full h-full px-5 flex items-center gap-3">
        <FaSearch className='text-lg text-gray-400' />
        <input
          value={text}
          type="text"
          className="w-full h-full placeholder:text-sm outline-disabled"
          placeholder="Search job title, keyword or url"
          onChange={handleChange}
        />
      </div>
      <div className='w-[150px] p-2 h-full'>
        <button
          onClick={handleClick}
          className='w-full bg-green-500 hover:bg-green-600 transition h-full rounded-md font-bold text-white'
        >
          Find Jobs
        </button>
      </div>
    </div>
  )
}

export default Searcher
