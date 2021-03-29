import _tw, { styled } from 'twin.macro'
import { Container } from '@components/UI'
import { Circle } from '@components/UI/Circle'
import { GuyPresenting } from '@components/SVG/GuyPresenting'

interface Project {
  title: string
  shortDescription: string
  description: string
  gitUrl?: string
  liveUrl?: string
}

interface ProjectShowcaseProps {
  project: Project
  isOdd: boolean
}

const StyledWrapper = styled.div`
  grid-template-columns: auto 1fr;
`

const ProjectShowcase = ({ project, isOdd }: ProjectShowcaseProps) => {
  return (
    <StyledWrapper tw="grid gap-5 items-center">
      <Circle />
      <article css={[isOdd && _tw`row-start-1 text-right`]}>
        <h4 tw="text-5xl">{project.title}</h4>
        <p tw="mt-5">{project.shortDescription}</p>
      </article>
    </StyledWrapper>
  )
}

const projects: Project[] = [
  {
    title: 'HoyTrabajas',
    shortDescription:
      'A colombian-based company that finds the perfect candidate match for hundreds of job offers.',
    description: 'Todo',
    liveUrl: 'https://hoytrabajas.com',
  },
  {
    title: 'Antonio Ecarri',
    shortDescription: `Promotional page for Antonio Ecarri,
    President of Alianza del Lápiz
    President of Fundación Casa Uslar Pietri`,
    description: 'Todo',
  },
  {
    title: 'EB2B',
    shortDescription: `A PaaS built for B2B ecommerce. 
    Side project still in development.`,
    description: 'todo',
  },
]

export const RecentWork = () => {
  return (
    <Container tw="w-full h-auto flex flex-col items-center justify-center space-x-5 md:max-w-screen-xl">
      <h2 tw="text-7xl">
        Recent <span tw="text-teal-500">Work</span>
      </h2>

      <div tw="mt-40 flex space-x-20">
        <div tw="max-w-2xl space-y-56">
          {projects.map((project, idx) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              isOdd={idx % 2 === 1}
            />
          ))}
        </div>
        <div>
          <GuyPresenting />
        </div>
      </div>
    </Container>
  )
}
