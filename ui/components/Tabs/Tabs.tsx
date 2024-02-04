"use client"

import { useState } from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn, transformId } from "#/utils"

import type { TabsProps } from "./Tabs.d"

export const Tabs = ({ tabs, content, className, ...props }: TabsProps) => {
  return (
    <TabsRoot defaultValue={tabs[0].title} className={cn("w-full", className)} {...props}>
      <TabsList>
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.title}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.title}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsRoot>
  )
}

export const TabsRoot = TabsPrimitive.Root
export const TabsList = ({ className, ...props }: any) => (
  <TabsPrimitive.List className={cn("flex gap-2", className)} {...props} />
)
export const TabsTrigger = ({ className, ...props }: any) => {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium border border-transparent duration-150 mb-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50/50 dark:hover:text-gray-200 dark:hover:bg-gray-200/10",
        "data-[state=active]:bg-gray-100/80 data-[state=active]:text-gray-700 data-[state=active]:border-gray-100 data-[state=active]:dark:bg-gray-100/10 data-[state=active]:dark:text-gray-100 data-[state=active]:dark:border-gray-100/10",
        className
      )}
      {...props}
    />
  )
}
export const TabsContent = ({ className, ...props }: any) => (
  <TabsPrimitive.Content className={cn("w-full", className)} {...props} />
)
