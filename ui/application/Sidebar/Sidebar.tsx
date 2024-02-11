"use client"

// import { logout } from '#/app/api/auth';
import { useState } from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import {
  ChevronRightIcon,
  ChevronSelectorVerticalIcon,
  Menu01Icon,
  XIcon,
} from "@untitledui-icons/react/line"
import { Author } from "#/ui/components/Author"
import { Avatar } from "#/ui/components/Avatar"
import { Popover, PopoverContent, PopoverTrigger } from "#/ui/components/Popover"
import { cn } from "#/utils"

const activeUser = {
  name: "Chelsea Hagon",
  email: "chelsea@skywardui.com",
  avatar: {
    src: "https://images.unsplash.com/photo-1612833603922-5e9c9d0a1b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=100&q=100",
    alt: "Chelsea Hagon",
  },
}

export const Sidebar = ({ navigation, showGroupLabels, showGroupDividers, separateLast }) => {
  const [expanded, setExpanded] = useState(true) // use localstorage to persist

  return (
    <>
      {/* Mobile expand menu button */}
      <button className="lg:hidden p-4" onClick={() => setExpanded(!expanded)}>
        <Menu01Icon className="size-6 text-gray-400" aria-hidden="true" />
        <span className="sr-only">Expand sidebar nav</span>
      </button>

      {/* Background overlay */}
      <div
        className={cn(
          "lg:hidden fixed top-0 w-screen h-screen bg-gray-950/75 duration-150",
          expanded ? "hidden opacity-0" : ""
        )}
      />

      {/* Navigation drawer - component */}
      <div
        className={cn(
          "lg:relative z-10 max-w-xs fixed -translate-x-full lg:translate-x-0 duration-150 top-0 left-0 bottom-0 flex flex-col gap-y-2 border-gray-200 bg-gray-100 dark:bg-gray-950 max-h-full",
          expanded ? "grow" : "translate-x-0 lg:w-14"
        )}
      >
        {/* Mobile hide menu button */}
        <button
          className={cn(
            "lg:hidden absolute right-0 transform translate-x-full p-3",
            expanded && "opacity-0"
          )}
          onClick={() => setExpanded(!expanded)}
        >
          <XIcon className="size-6 text-gray-400" aria-hidden="true" />
          <span className="sr-only">Expand sidebar nav</span>
        </button>

        {/* Logo & Expandible Button */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          {/* Desktop expand */}
          <button
            className="hidden lg:inline-block lg:absolute right-0 rounded-full translate-x-1/2 bg-white dark:bg-gray-950 shadow-sm p-1.5"
            onClick={() => setExpanded(!expanded)}
          >
            <ChevronRightIcon
              className={cn(
                "size-4 text-gray-400 transition-all duration-200",
                expanded && "rotate-180"
              )}
              aria-hidden="true"
            />
            <span className="sr-only">Collapse sidebar</span>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col">
          {/* Main Nav */}

          <ul role="list" className="flex-1 flex flex-col gap-y-1">
            {navigation.map((group, index) => (
              // Nav Label
              <li
                key={index}
                className={cn(
                  "space-y-1",
                  separateLast && index === navigation.length - 1 && "mt-auto"
                )}
              >
                {showGroupDividers && index > 0 && <hr className="border-gray-300 mx-3" />}
                {expanded && group.label ? (
                  <span className="text-xs text-gray-500 capitalize font-semibold px-1">
                    {group.label}
                  </span>
                ) : null}

                {/* Nav Items */}
                <SidebarNavItemList items={group.items} expanded={expanded} />
              </li>
            ))}
          </ul>

          {/* Footer Nav */}

          {/* Alert / CTA */}

          <SidebarUserMenu expanded={expanded} />
        </nav>
      </div>
    </>
  )
}

const SidebarUserMenu = ({ expanded }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button
          className={cn(
            "flex items-center justify-between gap-2 hover:bg-gray-50 p-2 rounded-md text-left mx-2 mb-2",
            !expanded && "lg:-translate-x-2 lg:w-14"
          )}
        >
          <Author name={activeUser.name} detail={activeUser.email} avatar={activeUser.avatar} />
          {expanded && (
            <ChevronSelectorVerticalIcon
              className={cn("size-4 shrink-0 text-gray-400", !expanded && "size-0")}
            />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent side="right" align="end" sideOffset={12} alignOffset={-6}>
        <div className="flex flex-col gap-y-px text-sm">
          <SecondaryNavItem href="#">
            <Avatar
              src={activeUser.avatar.src}
              alt={activeUser.avatar.alt}
              fallback={activeUser.avatar.alt}
              size="xs"
            />
            Skyward Digital
          </SecondaryNavItem>
          <SecondaryNavItem href="#">Profile</SecondaryNavItem>
          <SecondaryNavItem href="#">Logout</SecondaryNavItem>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const SidebarNavItemList = ({ items, expanded }) => {
  return (
    <ul role="list" className="space-y-px">
      {items.map((item) => (
        <li key={item.name}>
          {item.children ? (
            <SidebarDropdown item={item} expanded={expanded} />
          ) : (
            <SidebarNavItem item={item} expanded={expanded} />
          )}
        </li>
      ))}
    </ul>
  )
}

const SidebarNavItem = ({ item, expanded }) => {
  const { name, icon: Icon, href, current, children, open } = item
  const LinkOrDropdown = children?.length ? Collapsible.Trigger : "a"

  return (
    <LinkOrDropdown
      href={href}
      className={cn(
        "group flex items-center w-full text-left p-3 gap-x-3 text-sm leading-6 font-medium text-gray-600 duration-150",
        current ? "bg-gray-50" : "hover:bg-gray-50",
        !expanded && "lg:justify-center"
      )}
    >
      <Icon
        className="size-5 shrink-0 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 duration-150"
        aria-hidden="true"
      />
      <span className={cn(!expanded && "lg:sr-only")}>{name}</span>

      {children?.length && (
        <ChevronRightIcon
          className={cn(
            open ? "rotate-90 text-gray-500" : "text-gray-400",
            !expanded && "lg:hidden",
            "ml-auto h-5 w-5 shrink-0"
          )}
          aria-hidden="true"
        />
      )}
    </LinkOrDropdown>
  )
}

const SecondaryNavItem = ({ href, icon: Icon, current, children, className }) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-2 p-2 text-sm leading-6 text-gray-700 rounded-md duration-150",
        current ? "bg-gray-50" : "hover:bg-gray-50",
        className
      )}
    >
      {Icon && <Icon className="size-4 shrink-0 text-gray-400" aria-hidden="true" />}
      {children}
    </a>
  )
}

const SidebarDropdown = ({ item, expanded }) => {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="relative">
      <SidebarNavItem item={item} expanded={expanded} open={open} />
      <Collapsible.Content asChild>
        <ul className="mt-1">
          {item.children.map(({ name, icon: Icon, href, current }) => {
            return (
              <li key={name}>
                <Collapsible.Trigger asChild>
                  <SecondaryNavItem
                    href={href}
                    className={cn("group mx-2", Icon ? "pl-4" : "pl-5")}
                    current={current}
                  >
                    {Icon ? (
                      <Icon
                        className={cn(
                          "size-4 text-gray-400 group-hover:bg-gray-600 group-focus:bg-gray-600 duration-150",
                          current && "bg-gray-600"
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className={cn(
                          "size-1 bg-gray-300 rounded-full group-hover:bg-gray-400 group-focus:bg-gray-400 mr-1 duration-150",
                          current && "bg-gray-400"
                        )}
                      />
                    )}
                    {name}
                  </SecondaryNavItem>
                </Collapsible.Trigger>
              </li>
            )
          })}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
