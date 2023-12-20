import { useState } from "react"
import { TabGroup, TabList, TabPanel, TabPanels, TabTrigger } from "#/ui/components/Tabs"
import { cn } from "#/utils"
import { renderToString } from "react-dom/server"

function decodeHtml(html: string) {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const CodePreview = ({
  code,
  children,
}: {
  code: React.ReactElement
  children: React.ReactElement
}) => {
  const [copying, setCopying] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(
      // This function is used to remove all html tags from the code, including any html tags that may have been added for syntax highlighting (span)
      decodeHtml(
        renderToString(code)
          .replace(/<br[\s]*\/?>/gi, "\n")
          .replace(/<[^>]*>/g, "")
      )
    )
    setCopying(true)

    setTimeout(() => {
      setCopying(false)
    }, 2000)
  }

  return (
    <div className="w-full relative -my-6">
      <TabGroup>
        <TabList className="absolute top-10 right-4 flex items-center">
          {({ selectedIndex }: { selectedIndex: number }) => (
            <>
              <TabTrigger
                className={({ selected }: { selected: boolean }) =>
                  cn(
                    "rounded-md px-2 py-1.5 text-xs font-medium border border-transparent duration-150",
                    selected
                      ? "bg-indigo-500 text-white border-indigo-500"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-400/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10",
                    !code && "bg-transparent border-transparent text-gray-400 pointer-events-none"
                  )
                }
              >
                Preview
              </TabTrigger>
              {code && (
                <>
                  <TabTrigger
                    className={({ selected }: { selected: boolean }) =>
                      cn(
                        "rounded-md px-2 py-1.5 text-xs font-medium border border-transparent duration-150",
                        selected
                          ? "bg-indigo-500 text-white border-indigo-500"
                          : "text-gray-400 hover:text-gray-700 hover:bg-gray-300/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10"
                      )
                    }
                  >
                    Code
                  </TabTrigger>
                  <span className="w-px h-2 bg-gray-400/50" />
                  <button
                    className={cn(
                      "rounded-md py-1.5 text-xs font-medium border border-transparent duration-150 w-[3.25rem]",
                      selectedIndex === 0
                        ? "text-gray-400 hover:text-gray-700 hover:bg-gray-300/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10"
                        : "text-gray-400 hover:text-gray-200 hover:bg-gray-400/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10"
                    )}
                    onClick={copyCode}
                  >
                    {copying ? "Copied!" : "Copy"}
                  </button>
                </>
              )}
            </>
          )}
        </TabList>

        <TabPanels className="flex flex-1">
          <TabPanel className="not-prose size-full border border-gray-200 px-6 py-16 rounded-lg my-6 shadow-md flex items-center justify-center shadow-gray-200/20 gap-2 flex-wrap">
            {children}
          </TabPanel>
          {code && <TabPanel className="size-full [& pre]:py-8">{code}</TabPanel>}
        </TabPanels>
      </TabGroup>
    </div>
  )
}
