export interface CardProps {
  title: string
  body: string
  href: string
}

export function Card({ title, body, href }: CardProps) {
  return (
    <li className="flex p-px bg-gray-950 rounded-lg shadow-inner transition-all duration-75 bg-[100%] hover:bg-[0] bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 group">
      <a
        href={href}
        className="w-full rounded-lg text-white bg-gray-900 opacity-80 p-5"
      >
        <h2 className="m-0 text-xl duration-75 transition-colors group-hover:text-gray-200">
          {title}
          <span>&rarr;</span>
        </h2>
        <p className="mt-2 mb-0">{body}</p>
      </a>
    </li>
  )
}
