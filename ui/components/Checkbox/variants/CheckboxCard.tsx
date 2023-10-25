import { Switch } from '@headlessui/react'
import type { CheckboxProps } from '../Checkbox.d'
import { CheckIcon } from '@untitledui-icons/react/line'
import { cn } from '#/utils'

export const CheckboxCard = ({
  id,
  label,
  description,
  checked,
  indeterminate,
  icon,
  error,
  className, // selected,
} // onChange,
: CheckboxProps) => {
  const Icon = icon
  return (
    <Switch
      checked={checked}
      className={({ checked }) =>
        cn(
          'group relative flex cursor-pointer items-start gap-3 rounded-lg border border-gray-blue-800 px-6 py-4 transition-colors duration-150 ease-in-out hover:border-gray-blue-400',
          checked && 'border-gray-blue-400 bg-gray-blue-900'
          // !hideSelector && 'flex-col',
        )
      }
    >
      {({ checked }) => (
        <>
          {icon && (
            <div
              className={cn(
                'mr-3 flex self-center text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-primary-600',
                checked && 'text-primary-600'
              )}
            >
              <Icon className='h-6 w-6' />
            </div>
          )}
          <div className='w-full text-start leading-6'>
            <p className='text-gray-200 subpixel-antialiased'>{label}</p>
            {description && <p className='text-sm text-gray-400'>{description}</p>}
          </div>

          <div
            className={cn(
              'flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gray-300 bg-transparent transition-colors duration-150 ease-in-out group-hover:border-primary',
              checked && 'border-primary-600 bg-primary-600'
            )}
          >
            {checked && <CheckIcon className='mt-px h-3.5 w-3.5 text-white' strokeWidth={2} />}
          </div>
        </>
      )}
    </Switch>
  )
}
