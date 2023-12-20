import { expect } from "@storybook/jest"
import { userEvent, within } from "@storybook/testing-library"

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const testSwitchClick = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)

  // Checks label text is displayed correctly
  await expect(canvas.getByText("Dark Mode")).toBeInTheDocument()

  // Checks label is clickable
  await userEvent.click(canvas.getByText("Dark Mode"))

  // Checks switch can be clicked
  await userEvent.click(canvas.getByRole("button"))
}
