'use client'

import React from 'react'
import { Tab as TabPrimitive } from '@headlessui/react'
import { cn } from '#/utils'

export const TabGroup = ({ className, ...props }: { className?: string; [key: string]: any }) => {
  return (
    <div className={cn('w-full max-w-md px-2 py-16 sm:px-0', className)}>
      <TabPrimitive.Group {...props} />
    </div>
  )
}

export const TabList = React.forwardRef<
  React.ElementRef<typeof TabPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.List>
>(({ className, ...props }: { className?: string; [key: string]: any }, ref) => {
  return (
    <TabPrimitive.List
      ref={ref}
      className={cn('flex space-x-1 rounded-xl bg-indigo-900/20 dark:bg-white/5 p-1', className)}
      {...props}
    />
  )
})

export const TabTrigger = React.forwardRef<React.ElementRef<typeof Tab>, React.ComponentPropsWithoutRef<typeof Tab>>(
  ({ className, ...props }: { className?: string; [key: string]: any }, ref) => {
    return (
      <TabPrimitive
        ref={ref}
        className={({ selected }: { selected: boolean }) =>
          cn(
            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 transition-colors',
            selected
              ? 'bg-white dark:bg-white/10 shadow'
              : 'text-indigo-100 dark:text-gray-400 hover:bg-white/10 hover:text-white dark:hover:text-white'
          )
        }
        {...props}
      />
    )
  }
)

export const TabPanels = TabPrimitive.Panels

export const TabPanel = React.forwardRef<
  React.ElementRef<typeof TabPrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.Panel>
>(({ className, ...props }: { className?: string; [key: string]: any }, ref) => {
  return (
    <TabPrimitive.Panel
      ref={ref}
      className={cn(
        'rounded-xl p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        className
      )}
      {...props}
    />
  )
})
