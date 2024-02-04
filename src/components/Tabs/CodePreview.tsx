import { useState } from "react"
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "#/ui/components/Tabs"
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
  className,
}: {
  code: React.ReactElement
  children: React.ReactElement
  className?: string
}) => {
  const [selectedTab, setSelectedTab] = useState<string>("preview")
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
      <TabsRoot
        defaultValue="preview"
        value={selectedTab}
        onValueChange={(e) => {
          console.log(e)
          setSelectedTab(e)
        }}
      >
        <TabsList className="absolute top-10 right-4 flex items-center">
          <TabsTrigger
            value="preview"
            className={cn(
              "rounded-md px-2 py-1.5 text-xs font-medium border border-transparent duration-150 text-gray-400 hover:text-gray-200 hover:bg-gray-400/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10 mb-0",
              "data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:border-indigo-500",
              !code && "bg-transparent border-transparent text-gray-400 pointer-events-none"
            )}
          >
            Preview
          </TabsTrigger>
          {code && (
            <>
              <TabsTrigger
                value="code"
                className={cn(
                  "rounded-md px-2 py-1.5 text-xs font-medium border border-transparent duration-150 text-gray-400 hover:text-gray-700 hover:bg-gray-300/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10 mb-0",
                  "data-[state=active]:bg-indigo-500 data-[state=active]:text-white data-[state=active]:border-indigo-500"
                )}
              >
                Code
              </TabsTrigger>
              <span className="w-px h-2 bg-gray-400/50" />
              <button
                className={cn(
                  "rounded-md py-1.5 text-xs font-medium border border-transparent duration-150 w-[3.25rem]",
                  "text-gray-400 hover:text-gray-700 hover:bg-gray-300/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10",
                  selectedTab === "code" &&
                    "text-gray-400 hover:text-gray-200 hover:bg-gray-400/25 dark:hover:text-gray-200 dark:hover:bg-gray-200/10"
                )}
                onClick={copyCode}
              >
                {copying ? "Copied!" : "Copy"}
              </button>
            </>
          )}
        </TabsList>

        <div className="flex flex-1 py-6">
          <TabsContent value="preview">
            <div
              className={cn(
                "not-prose size-full border bg-gray-50 border-gray-200 px-6 py-16 rounded-lg shadow-md flex items-center justify-center shadow-gray-200/20 gap-2 flex-wrap",
                className
              )}
            >
              {children}
            </div>
          </TabsContent>
          {code && (
            <TabsContent value="code">
              <div className="size-full [& pre]:py-8">{code}</div>
            </TabsContent>
          )}
        </div>
      </TabsRoot>
    </div>
  )
}
