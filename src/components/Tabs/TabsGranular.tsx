import { TabGroup, TabList, TabPanel, TabPanels, TabTrigger } from "#/ui/components/Tabs"

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
    <div className="flex w-full space-x-2">
      <TabGroup>
        <TabList className="flex flex-col w-40">
          {tabs.map((tab) => (
            <TabTrigger key={tab}>{tab}</TabTrigger>
          ))}
        </TabList>

        <TabPanels className="flex flex-1">
          {tabs.map((tab, index) => (
            <TabPanel key={tab} className="size-full">
              {panels[index]}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  )
}
