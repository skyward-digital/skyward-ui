import { Fragment, useState } from 'react'
import { cn } from '#/utils'
import { CheckIcon } from '@untitledui-icons/react/line'
import type { CheckboxProps } from './Checkbox.d'

export const Checkbox = ({
  id,
  label,
  checked,
  defaultChecked,
  icon,
  className,
  size = 'md',
  ...props
}: CheckboxProps) => {
  // Uncontrolled (internal) component state - see "checked" for controlled component state
  const [checkedState, setCheckedState] = useState(defaultChecked || false)

  const isChecked = checked !== undefined ? checked : checkedState
  const Icon = icon || CheckIcon

  const Wrapper = label ? 'div' : Fragment

  return (
    <Wrapper className='flex items-center'>
      <button
        id={id}
        type='button'
        role='checkbox'
        aria-checked={isChecked === 'indeterminate' ? 'mixed' : isChecked}
        aria-labelledBy={`for-${id}`}
        data-state={isChecked ? 'checked' : ''}
        value={isChecked ? 'on' : 'off'}
        className={cn(
          'inline-flex rounded-md flex-none items-center justify-center border transition-colors duration-150 ease-in-out',
          isChecked
            ? 'border-indigo-500 bg-indigo-500 text-white'
            : 'border-gray-700 dark:border-gray-300 bg-transparent',
          // size
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-5 h-5',
          size === 'lg' && 'w-6 h-6',
          // overrides
          className
        )}
        onKeyDown={event => {
          props.onKeyDown && props.onKeyDown(event)
          // According to WAI ARIA, Checkboxes don't activate on enter keypress
          if (event.key === 'Enter') event.preventDefault()
        }}
        onClick={event => {
          props.onChange ? props.onChange(event) : setCheckedState(!isChecked)
        }}
        {...props}
      >
        {isChecked && (
          <Icon
            className={cn(
              'pointer-events-none text-inherit',
              size === 'sm' && 'w-3 h-3',
              size === 'md' && 'w-4 h-4',
              size === 'lg' && 'w-5 h-5'
            )}
            strokeWidth={3}
          />
        )}
      </button>
      <input
        type='checkbox'
        aria-hidden='true'
        tabIndex={-1}
        value={isChecked ? 'on' : 'off'}
        className='-translate-x-full absolute opacity-0 h-4 w-4 pointer-events-none'
        checked={isChecked === 'indeterminate' ? true : isChecked}
        onChange={event => {
          props.onChange ? props.onChange(event) : setCheckedState(!isChecked)
        }}
      />
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'ml-2 text-gray-800 dark:text-gray-200 cursor-pointer', // size
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-md'
          )}
        >
          {label}
        </label>
      )}
    </Wrapper>
  )
}