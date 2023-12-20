import { Tabs as TabsPrimitive, type TabsProps } from "#/ui/components/Tabs"

/* Due to how astro works we cannot use a traditional react syntax for this component
Instead, we take advantage of the astro <slot> component functionality, passing in the tabs and panels as props
We then convert those props into the format that the Tabs component expects
*/
export const Tabs = ({ tabs, ...props }: { tabs: TabsProps["tabs"]; [key: string]: any }) => {
  // Get all the slots from astro except
  const panels = Object.keys(props)
    .filter((key) => !key.includes("children"))
    // We may want to pass on other props in the future, which means we'll need to be specific about which props we read as 'slots'
    // .filter(key => key.includes('panel'))
    .map((key) => props[key])

  return <TabsPrimitive tabs={tabs} panels={panels} />
}
