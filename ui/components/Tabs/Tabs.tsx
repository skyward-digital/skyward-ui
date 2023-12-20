"use client"

import { Tab } from "@headlessui/react"
import { cn, transformId } from "#/utils"

import type { TabsProps } from "./Tabs.d"

export const Tabs = ({ tabs, panels }: TabsProps) => {
  // console.log(panels)

  return (
    <div className="w-full">
      <TabGroup>
        <TabList>
          {tabs.map((tab) => (
            <TabTrigger key={transformId(tab)}>{tab}</TabTrigger>
          ))}
        </TabList>
        {panels && (
          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel key={transformId(tab)}>{panels[index]}</TabPanel>
            ))}
          </TabPanels>
        )}
      </TabGroup>
    </div>
  )
}

export const TabGroup = Tab.Group
export const TabList = ({ className, ...props }: any) => (
  <Tab.List className={cn("flex gap-2", className)} {...props} />
)
export const TabTrigger = ({ className, ...props }: any) => {
  return (
    <Tab
      className={
        typeof className === "function"
          ? className
          : ({ selected }: { selected: boolean }) =>
              cn(
                "rounded-md px-3 py-2 text-sm font-medium border border-transparent duration-150 mb-2",
                selected
                  ? "bg-gray-100/80 text-gray-700 border-gray-100 dark:bg-gray-100/10 dark:text-gray-100 dark:border-gray-100/10"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50/50 dark:hover:text-gray-200 dark:hover:bg-gray-200/10",
                className
              )
      }
      {...props}
    />
  )
}
export const TabPanels = ({ className, ...props }: any) => (
  <Tab.Panels className={cn("w-full", className)} {...props} />
)
export const TabPanel = Tab.Panel
