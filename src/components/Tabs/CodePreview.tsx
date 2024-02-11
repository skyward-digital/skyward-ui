import { useState } from "react"
import { Button } from "#/ui/components/Button"
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
      <TabsRoot defaultValue="preview" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="absolute top-10 right-4 flex items-center">
          <TabsTrigger value="preview" asChild>
            <Button
              variant={selectedTab !== "code" ? "primary" : "ghost"}
              size="xs"
              className={cn(selectedTab === "code" && "text-gray-400 hover:text-gray-300")}
            >
              Preview
            </Button>
          </TabsTrigger>
          {code && (
            <>
              <TabsTrigger value="code" asChild>
                <Button variant={selectedTab === "code" ? "primary" : "ghost"} size="xs">
                  Code
                </Button>
              </TabsTrigger>
              <span className="w-px h-2 bg-gray-400/50" />
              <Button
                variant="ghost"
                size="xs"
                className={cn(selectedTab === "code" && "text-gray-400 hover:text-gray-300")}
                onClick={copyCode}
              >
                {copying ? "Copied!" : "Copy"}
              </Button>
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
              <div className="size-full [&>*]:py-8">{code}</div>
            </TabsContent>
          )}
        </div>
      </TabsRoot>
    </div>
  )
}
