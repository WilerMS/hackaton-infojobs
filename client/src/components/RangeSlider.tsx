import { useDebounce } from '@app/hooks/useDebounce'
import { currencyConverter } from '@app/utils'
import { useEffect, useState, type FC } from 'react'

interface Props {
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}

export const RangeSlider: FC<Props> = ({
  value = 10000,
  min = 10000,
  max = 100000,
  onChange = () => { }
}) => {
  const [_value, setValue] = useState(value)
  const debouncedValue = useDebounce(_value, 600)
  const currency = currencyConverter('es')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }

  useEffect(() => {
    onChange(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="w-full flex flex-col">
      <input className="w-full accent-green-400" min={min} max={max} value={_value} onChange={handleChange} type="range" />
      <div className="w-full flex justify-between pt-1">
        <span className="font-light text-sm">10.000€</span>
        <span className="font-light text-sm">{currency.format(_value)}€</span>
      </div>
    </div>
  )
}
