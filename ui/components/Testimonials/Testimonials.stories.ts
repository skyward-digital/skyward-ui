import type { Meta, StoryObj } from "@storybook/react"

import { Testimonials, type TestimonialsProps } from "."

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Testimonials> = {
  title: "Core/Testimonials",
  component: Testimonials,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Testimonials>

const args: TestimonialsProps = {
  authors: [
    {
      name: "Rian Patel",
      avatar: {
        src: "/avatars/Image-1.jpg",
        alt: "Rian Patel",
      },
    },
    {
      name: "Alex Chen",
      avatar: {
        src: "/avatars/Image-2.jpg",
        alt: "Alex Chen",
      },
    },
    {
      name: "Sarah Johnson",
      avatar: {
        src: "/avatars/Image-3.jpg",
        alt: "Sarah Johnson",
      },
    },
    {
      name: "Michael Rodriguez",
      avatar: {
        src: "/avatars/Image-4.jpg",
        alt: "Michael Rodriguez",
      },
    },
    {
      name: "Olivia Thompson",
      avatar: {
        src: "/avatars/Image-5.jpg",
        alt: "Olivia Thompson",
      },
    },
  ],
  rating: 5,
  totalCustomers: 1000,
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args,
}

export const HalfStar = {
  args: {
    ...args,
    rating: 4.5,
  },
}

export const FourStars = {
  args: {
    ...args,
    rating: 4,
  },
}

export const OneStar = {
  args: {
    ...args,
    rating: 1,
  },
}
