import { Container, Title } from '@components/UI'
import { GuyPresenting } from '@components/SVG/GuyPresenting'
import { ProjectShowcase } from './ProjectShowcase'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

export interface Project {
  title: string
  role: string
  shortDescription: string
  description: string[]
  techUsed: string
  imageUrl: string
  gitUrl?: string
  liveUrl?: string
  figmaUrl?: string
}

export const Projects = () => {
  const { t } = useTranslation('home')

  const projects: Project[] = t('my-work.works', null, {
    returnObjects: true,
  })

  return (
    <>
      <Title tw="text-center mt-20 mb-10 px-8 sm:mt-0 md:mb-0">
        <Trans
          i18nKey="home:my-work.title"
          components={[<span key="bold" tw="text-primary-400 font-bold" />]}
        />
      </Title>

      <Container tw="relative w-full h-auto flex flex-col justify-center md:(flex-row) space-x-5 items-stretch md:max-w-screen-xl">
        <div tw="bg-white dark:bg-darkSecondary mt-48 p-14 border-2 border-primary-400 rounded-lg md:(border-none p-0) lg:p-0 md:mt-0 lg:bg-transparent z-10">
          <div tw="max-w-2xl space-y-20 md:space-y-20 mt-0 md:mt-20">
            {projects.map((project, idx) => (
              <ProjectShowcase
                key={project.title}
                project={project}
                isOdd={idx % 2 === 1}
              />
            ))}
          </div>
        </div>
        <div>
          <GuyPresenting tw="absolute top-0 left-0 right-0 mx-auto max-w-full md:sticky width[330px] md:width[auto]" />
        </div>
      </Container>
    </>
  )
}
