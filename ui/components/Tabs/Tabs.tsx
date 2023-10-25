'use client'

import { Tab } from '@headlessui/react'
import type { TabsProps } from './Tabs.d'
import { cn } from '#/utils'

export const Tabs = ({ tabs, panels }: TabsProps) => {
  const transformId = (label: string) => label?.replace(/\s+/g, '-')?.toLowerCase()
  console.log(panels)

  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className={cn('flex space-x-2 mb-2')}>
          {tabs.map((tab, index) => (
            <Tab
              key={transformId(tab)}
              className={({ selected }: { selected: boolean }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm font-medium border border-transparent duration-150',
                  selected
                    ? 'bg-gray-100/80 text-gray-700 border-gray-100 dark:bg-gray-100/10 dark:text-gray-100 dark:border-gray-100/10'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/50 dark:hover:text-gray-200 dark:hover:bg-gray-200/10'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        {panels && (
          <Tab.Panels className='w-full'>
            {tabs.map((tab, index) => (
              <Tab.Panel key={transformId(tab)}>{panels?.props?.children?.[index]}</Tab.Panel>
            ))}
          </Tab.Panels>
        )}
      </Tab.Group>
    </div>
  )
}
