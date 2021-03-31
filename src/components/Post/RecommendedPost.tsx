import Link from 'next/link'
import { routes } from '@lib/utils/routes'

export const RecommendedPost = () => {
  // TODO: make dynamic
  const slug = 'randomPost'

  return (
    <Link href={routes.post(slug)}>
      <a tw="text-right">
        <p tw="font-bold text-lg">
          Improving developer experience as a Full-stack
        </p>
        <p tw="text-sm">
          Examining tools and tricks to improve your developer experience
        </p>
      </a>
    </Link>
  )
}
