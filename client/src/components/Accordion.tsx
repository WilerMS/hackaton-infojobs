import { useState, type FC } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@icons/index'

interface Props {
  title: string
  className?: string
  defaultExpanded?: boolean
  children?: JSX.Element | JSX.Element[] | string
}

export const Accordion: FC<Props> = ({
  title,
  defaultExpanded = false,
  children = <></>
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className={`overflow-hidden border-gray-200 bg-white border rounded-lg ${expanded ? 'max-h-full' : ''}`}>
      <button
        type="button"
        onClick={() => setExpanded(state => !state)}
        className={`w-full flex items-center justify-between px-6 py-3 ${expanded ? 'border-b' : ''}`}
      >
        <div className="flex flex-1 mr-6">{title}</div>
        <div>
          {expanded
            ? <ArrowDownIcon />
            : <ArrowUpIcon />
          }
        </div>
      </button>
      <div className={!expanded ? 'hidden' : ''}>
        <div className="w-full px-6 py-3">
          {children}
        </div>
      </div>
    </div>
  )
}
