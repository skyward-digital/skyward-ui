import type { Meta } from '@storybook/react'
import { TabGroup, TabList, TabTrigger, TabPanel, TabPanels } from './Tabs'

const meta: Meta<typeof TabGroup> = {
  title: 'Components/TabGroup',
  component: TabGroup,
  parameters: {
    docs: {
      description: {
        component:
          'TabGroup is a wrapper component that provides a sticky navigation for TabGroup. It should be used with TabLink to provide full functionality',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

export const Default = {
  render: () => (
    <TabGroup>
      <TabList>
        <TabTrigger>Tab 1</TabTrigger>
        <TabTrigger>Tab 2</TabTrigger>
        <TabTrigger>Tab 3</TabTrigger>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel>
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel>
          <p>Tab 3 content</p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  ),
}
