import type { Meta } from "@storybook/react"

import { Table, TableCell, TableHeaderCell, TableRow } from "."

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
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

export const Default = {
  render: () => {
    return (
      <Table>
        <thead>
          <TableRow>
            <TableHeaderCell>Column 1</TableHeaderCell>
            <TableHeaderCell>Column 2</TableHeaderCell>
            <TableHeaderCell>Column 3</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 4</TableCell>
            <TableCell>Cell 5</TableCell>
            <TableCell>Cell 6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 7</TableCell>
            <TableCell>Cell 8</TableCell>
            <TableCell>Cell 9</TableCell>
          </TableRow>
        </tbody>
      </Table>
    )
  },
}
