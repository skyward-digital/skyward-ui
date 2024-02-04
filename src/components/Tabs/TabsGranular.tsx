import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "#/ui/components/Tabs"

/* Due to how astro works we cannot use a traditional react syntax for this component
Instead, we take advantage of the astro <slot> component functionality, passing in the tabs and panels as props
We then convert those props into the format that the Tabs component expects
*/

export const TabsGranular = ({ tabs, ...props }: { tabs: string[]; [key: string]: any }) => {
  const panels = Object.keys(props)
    .filter((key) => !key.includes("children"))
    // We may want to pass on other props in the future, which means we'll need to be specific about which props we read as 'slots'
    // .filter(key => key.includes('panel'))
    .map((key) => props[key])

  return (
    <TabsRoot className="flex w-full space-x-2">
      <TabsList className="flex flex-col">
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={index}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex flex-1">
        {tabs.map((_, index) => (
          <TabsContent key={index} value={index} className="size-full">
            {panels[index]}
          </TabsContent>
        ))}
      </div>
    </TabsRoot>
  )
}
