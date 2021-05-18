import { Post, PostPreview } from '@components/Post/PostPreview'
import { Circle, Container } from '@components/UI'

// todo: add dynamic posts

const posts: Post[] = [
  {
    slug: 'improving-dev',
    title: 'Improving developer experience as a Full-stack',
    readTime: 5,
    shortDescription:
      'Examining tools and tricks to improve your developer experience. Anim deserunt quis consectetur adipisicing.',
  },
  {
    slug: 'use-ts',
    title: 'Why you should use TypeScript',
    readTime: 15,
    shortDescription:
      'Examining tools and tricks to improve your developer experience. Anim deserunt quis consectetur adipisicing.',
  },
  {
    slug: 'supabase-oss',
    title: 'Supabase, an open-sourced alternative to Firebase',
    readTime: 12,
    shortDescription:
      'Examining tools and tricks to improve your developer experience. Anim deserunt quis consectetur adipisicing',
  },
  {
    slug: 'animations-in-reactGsap',
    title: 'Animations in React with GSAP',
    readTime: 15,
    shortDescription:
      'Examining tools and tricks to improve your developer experience. Anim deserunt quis consectetur adipisicing',
  },
]

interface WritingProps {
  limit?: number
}

export const Writing = ({ limit }: WritingProps) => {
  const postsToShow = limit ? posts.slice(0, limit) : posts

  return (
    <Container tw="flex flex-col">
      <div tw="text-center mx-auto">
        <h2 tw="text-7xl">Writing</h2>
        <p>Useful resources and insights about software development</p>
      </div>

      <div tw="space-y-5 mt-20">
        {postsToShow.map((post, idx) => (
          <PostPreview key={post.slug} post={post} isOdd={idx % 2 === 1} />
        ))}
      </div>

      <div tw="mt-20 mx-auto">
        <Circle size={130}>
          <button
            tw="w-full h-full flex items-center justify-center flex-col z-10 cursor-pointer font-mono text-primary-400 font-bold"
            // Todo: redirect to articles list here
            onClick={() => alert('hello')}
          >
            View all
          </button>
        </Circle>
      </div>
    </Container>
  )
}
