import tw, { styled } from 'twin.macro'
import { Circle } from '@components/UI/Circle'
import { useToggle } from '@lib/hooks/useToggle'
import { down } from 'styled-breakpoints'
import { ProjectModal } from './ProjectModal'
import { Project } from './Projects'
import useTranslation from 'next-translate/useTranslation'

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
  const { t } = useTranslation('home')

  return (
    <>
      <StyledWrapper tw="grid gap-5 items-center justify-items-center sm:justify-items-auto">
        <button type="button" onClick={show} tw="flex">
          <Circle tw="p-10">
            <img
              src={project.imageUrl}
              tw="object-contain"
              alt="Project icon"
            />
          </Circle>
        </button>

        <article
          tw="text-center md:text-left"
          css={[isOdd && tw`md:row-start-1 md:text-right`]}
        >
          <h3 tw="text-2xl lg:text-3xl text-primary-500">{project.role}</h3>
          <h4 tw="text-xl lg:text-2xl">{project.title}</h4>

          <button
            tw="mt-5 text-sm sm:text-base underline"
            type="button"
            onClick={show}
          >
            {t('my-work.see-more')}
          </button>
        </article>
      </StyledWrapper>

      {isShowcaseOpen && <ProjectModal project={project} hide={hide} />}
    </>
  )
}
