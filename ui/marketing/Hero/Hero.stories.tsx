import type { Meta, StoryObj } from "@storybook/react"
import { Default as testimonials } from "#/ui/components/Testimonials/Testimonials.stories"
import { TextHighlight } from "#/ui/components/TextHighlight"

import { Hero, type HeroProps } from "."

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Hero> = {
  title: "Marketing/Hero",
  component: Hero,
  parameters: {
    docs: {
      description: {
        component:
          "Hero component is a section that takes up all of the page width. It has different variants which dictate the content displayed.",
      },
    },
    chromatic: {
      viewports: [390, 1440],
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Hero>

const args: HeroProps = {
  title: (
    <h1>
      Lorem ipsum <TextHighlight className="px-2 -mx-2">dolor sit</TextHighlight> amet,{" "}
      <strong>consectetur adipiscing elit</strong>
    </h1>
  ),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttons: [
    {
      children: "Get started",
      href: "#",
    },
    {
      children: "See the benefits",
      href: "#",
    },
  ],
  testimonials: testimonials.args,
  contain: false,
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args,
}
