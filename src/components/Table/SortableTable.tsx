import { useState } from "react"
import {
  ArchiveIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Edit05Icon,
  MessageChatCircleIcon,
} from "@untitledui-icons/react/line"
import { employees } from "#/src/data/employees"
import { Author } from "#/ui/components/Author"
import { Badge } from "#/ui/components/Badge"
import { Button } from "#/ui/components/Button"
import {
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
} from "#/ui/components/Table"
import { cn } from "#/utils"

export const SortableTable = () => {
  const [data, setData] = useState(employees)
  const [currentSort, setCurrentSort] = useState<{
    key: string
    order: "asc" | "desc" | ""
  }>()

  const sortData = (key: string) => {
    const startOrder = currentSort?.key === key ? currentSort?.order : ""
    const nextOrder =
      startOrder === "" ? "asc" : startOrder === "asc" ? "desc" : ""

    setCurrentSort({
      key,
      order: nextOrder,
    })

    if (!nextOrder) {
      // reset to default order if not asc or desc
      setData(employees)
    } else {
      setData(
        // Don't mutate the original array
        [...employees].sort((a, b) => {
          if (nextOrder === "desc") return a[key] < b[key] ? 1 : -1

          return a[key] > b[key] ? 1 : -1
        })
      )
    }
  }

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeaderCell
            onClick={() => sortData("name")}
            className="flex justify-between items-center"
          >
            Name
            <SortIndicator
              order={currentSort?.key === "name" ? currentSort?.order : ""}
            />
          </TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell
            onClick={() => sortData("role")}
            className="flex justify-between items-center"
          >
            Role
            <SortIndicator
              order={currentSort?.key === "role" ? currentSort?.order : ""}
            />
          </TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell
            onClick={() => sortData("location")}
            className="flex justify-between items-center"
          >
            Location
            <SortIndicator
              order={currentSort?.key === "location" ? currentSort?.order : ""}
            />
          </TableHeaderCell>
          <TableHeaderCell>Time</TableHeaderCell>
          <TableHeaderCell
            onClick={() => sortData("startDate")}
            className="flex justify-between items-center"
          >
            Start Date
            <SortIndicator
              order={currentSort?.key === "startDate" ? currentSort?.order : ""}
            />
          </TableHeaderCell>
          <TableHeaderCell>Bio</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        {data.map((employee) => (
          <TableRow>
            <TableCell>
              <Author
                avatar={{
                  src: employee.avatar,
                  alt: employee.name,
                }}
                name={employee.name}
                detail={employee.username}
              />
            </TableCell>
            <TableCell>
              <Badge
                color={
                  {
                    Online: "green",
                    Offline: "gray",
                    Busy: "red",
                    Away: "yellow",
                  }[employee.status]
                }
                dot
              >
                {employee.status}
              </Badge>
            </TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <Badge color="gray" transparent>
                {employee.location}
              </Badge>
            </TableCell>
            <TableCell className="flex flex-col">
              <span>{`${new Date().getHours()}:${new Date().getMinutes()}`}</span>
              <span className="text-xs">{employee.timezone}</span>
            </TableCell>
            <TableCell>
              {new Date(employee.startDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </TableCell>
            <TableCell className="text-sm max-w-xs">
              <span className="line-clamp-2">{employee.bio}</span>
            </TableCell>
            <TableCell className="space-x-2">
              <Button variant="ghost" title="message">
                <MessageChatCircleIcon />
                <span className="sr-only">Message</span>
              </Button>
              <Button variant="ghost" title="edit">
                <Edit05Icon />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="ghost" title="archive">
                <ArchiveIcon />
                <span className="sr-only">Archive</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}

const SortIndicator = ({ order }: { order: "asc" | "desc" | "" }) => (
  <Button variant="ghost" size="sm" className="flex flex-col gap-0 -my-2 group">
    <ChevronUpIcon
      className={cn(
        "w-4 h-4 -mb-0.5",
        order !== "asc" && "opacity-50 group-hover:opacity-100"
      )}
    />
    <ChevronDownIcon
      className={cn(
        "w-4 h-4 -mt-0.5",
        order !== "desc" && "opacity-50 group-hover:opacity-100"
      )}
    />
  </Button>
)
