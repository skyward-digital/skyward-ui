export { Link } from "./Link"
export interface LinkProps {
  _uid: string
  link: {
    id: string
    url: string
    linktype: string
    cached_url: string
    story: {
      name: string
      id: number
      uuid: string
      slug: string
      url: string
      full_slug: string
      _stopResolving: boolean
    }
  }
  label: string
  component: string
}
