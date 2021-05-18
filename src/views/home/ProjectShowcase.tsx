import tw, { styled } from 'twin.macro'
import { Circle } from '@components/UI/Circle'
import { useToggle } from '@lib/hooks/useToggle'
import { down } from 'styled-breakpoints'
import { ProjectModal } from './ProjectModal'
import { Project } from './Projects'

interface ProjectShowcaseProps {
  project: Project
  isOdd: boolean
}

const StyledWrapper = styled.div`
  grid-template-columns: auto 1fr;

  ${down('sm')} {
    ${tw`grid-cols-1`}
  }
`

export const ProjectShowcase = ({ project, isOdd }: ProjectShowcaseProps) => {
  const [isShowcaseOpen, { setTrue: show, setFalse: hide }] = useToggle()

  return (
    <>
      <StyledWrapper tw="grid gap-5 items-center justify-items-center sm:justify-items-auto">
        <button type="button" onClick={show} tw="flex">
          <Circle />
        </button>
        <article
          tw="text-center md:text-left"
          css={[isOdd && tw`md:row-start-1 md:text-right`]}
        >
          <h4 tw="text-4xl lg:text-5xl">{project.title}</h4>
          <p tw="mt-5 text-sm sm:text-base">{project.shortDescription}</p>
        </article>
      </StyledWrapper>

      {isShowcaseOpen && <ProjectModal project={project} hide={hide} />}
    </>
  )
}
