import { styled } from 'twin.macro'

interface PostThumbnailProps {
  isOdd: boolean
}

const PostThumbnail = styled.div<PostThumbnailProps>`
  height: 150px;
  width: 17.5rem;

  // Todo: remove this bg and add the proper img thumbnail
  background: teal;
  clip-path: polygon(0% 1%, 98% 2%, 94% 99%, 4% 99%);

  ${(props) =>
    props.isOdd &&
    `
     clip-path: polygon(4% 4%, 96% 4%, 100% 99%, 1% 99%);
  `};
`

export interface Post {
  slug: string
  title: string
  readTime: number
  shortDescription: string
}

interface PostPreviewProps {
  post: Post
  isOdd: boolean
}

export const PostPreview = ({ post, isOdd }: PostPreviewProps) => {
  return (
    <div tw="flex space-x-14">
      <PostThumbnail isOdd={isOdd} />
      <div>
        <h5 tw="text-xl font-mono font-bold text-teal-500">{post.title}</h5>
        <span tw="font-sans text-lg text-gray-500">
          {post.readTime} min read
        </span>
        <p tw="text-base">{post.shortDescription}</p>
      </div>
    </div>
  )
}
