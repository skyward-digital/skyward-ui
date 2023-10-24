import type { MarkdownHeading } from 'astro'
import { useState, useEffect, useRef } from 'react'
import { cn } from '#/utils'

type ItemOffsets = {
  id: string
  topOffset: number
}

const TableOfContents = ({ headings = [] }: { headings: MarkdownHeading[] }) => {
  const toc = useRef<HTMLUListElement>()
  const onThisPageID = 'on-this-page-heading'
  const itemOffsets = useRef<ItemOffsets[]>([])
  const [currentID, setCurrentID] = useState('overview')
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)')
      itemOffsets.current = Array.from(titles).map(title => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }))
    }

    getItemOffsets()
    window.addEventListener('resize', getItemOffsets)

    return () => {
      window.removeEventListener('resize', getItemOffsets)
    }
  }, [])

  useEffect(() => {
    if (!toc.current) return

    const setCurrent: IntersectionObserverCallback = entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target
          if (id === onThisPageID) continue
          setCurrentID(entry.target.id)
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    }

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

    // Observe all the headings in the main page content.
    document.querySelectorAll('article :is(h1,h2,h3)').forEach(h => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  }, [toc.current])

  const onLinkClick = e => {
    setCurrentID(e.target.getAttribute('href').replace('#', ''))
  }

  return (
    <>
      <h2 id={onThisPageID} className='font-semibold text-gray-900 mb-1'>
        On this page
      </h2>
      <ul ref={toc}>
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map(heading => (
            <li
              key={heading.slug}
              className={`header-link depth-${heading.depth} ${
                currentID === heading.slug ? 'current-header-link' : ''
              }`.trim()}
            >
              <a
                href={`#${heading.slug}`}
                onClick={onLinkClick}
                className={cn(
                  'block py-1 text-gray-600 transition duration-100 ease-out hover:underline focus:underline',
                  heading.depth === 3 && 'pl-3 text-[0.825rem]'
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </>
  )
}

export default TableOfContents
