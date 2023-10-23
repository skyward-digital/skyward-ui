'use client'

import { useState } from 'react'
import { cn } from '#/utils'
import type { SwitchProps } from './Switch.d'

export const Switch = ({
  id,
  label,
  detail,
  hideLabel = false,
  reverse,
  size = 'md',
  checked = false,
  disabled = false,
  className,
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(checked)

  const handleChange = () => {
    if (disabled) return
    setEnabled(!enabled)
  }

  const transformId = id ?? label?.replace(/\s+/g, '-')?.toLowerCase() ?? undefined

  return (
    <div
      className={cn(
        'focus:outline-brand-100 flex gap-2 rounded-lg p-2.5',
        detail ? 'items-start' : 'items-center',
        reverse && 'flex-row-reverse',
        className
      )}
      onClick={handleChange}
      type='button'
      role='switch'
      aria-checked={enabled}
    >
      <button
        id={transformId}
        className={cn(
          'focus:ring-brand relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black',
          enabled ? 'bg-indigo-500' : 'bg-gray-200 dark:bg-gray-700',
          size === 'sm' && 'h-4 w-8',
          size === 'md' && 'h-6 w-11',
          size === 'lg' && 'h-8 w-14'
        )}
      >
        <span
          className={cn(
            'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            size === 'sm' && 'h-3 w-3',
            size === 'md' && 'h-5 w-5',
            size === 'lg' && 'h-7 w-7',
            enabled
              ? {
                  'translate-x-4': size === 'sm',
                  'translate-x-5': size === 'md',
                  'translate-x-6': size === 'lg',
                }
              : 'translate-x-0'
          )}
        />
      </button>

      {label ? (
        <div className={cn('-my-1.5', !reverse ? 'text-left' : 'text-right', hideLabel && 'sr-only')}>
          <label htmlFor={transformId} className='font-semibold'>
            {label}
          </label>
          {detail ? <p className='text-sm text-gray-600 dark:text-gray-400'>{detail}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
