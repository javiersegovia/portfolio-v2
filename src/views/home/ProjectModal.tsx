import tw from 'twin.macro'
import { CloseButton } from '@components/Button/CloseButton'
import { Modal } from '@components/Modal'
import { Project } from './Projects'
import useTranslation from 'next-translate/useTranslation'

interface ProjectModalProps {
  project: Project
  isOdd?: boolean
  hide?: () => void
}

export const ProjectModal = ({
  project,
  hide,
  isOdd = false,
}: ProjectModalProps) => {
  const { t } = useTranslation('home')

  return (
    <Modal withOverlay onRequestClose={hide}>
      {({ ref }) => (
        <div
          ref={ref}
          tw="m-auto max-w-xl h-4/6 relative flex flex-col lg:flex-row rounded-md overflow-hidden"
        >
          <div
            tw="bg-white dark:bg-black relative top-0 my-auto px-10 sm:px-20 py-12 w-full h-full"
            css={[!isOdd ? tw`ml-auto` : tw`mr-auto`]}
          >
            <CloseButton onClick={hide} tw=" top-6 right-10" size="xl" />

            <div tw="height[95%] overflow-y-auto mt-10 sm:mt-0 max-w-xl mx-auto">
              <h3 tw="text-5xl font-sans text-center mt-10 text-primary-400">
                {project.title}
              </h3>

              <article tw="pb-80 sm:pb-0 mt-10 space-y-10 text-base text-justify overflow-x-auto">
                {project.liveUrl && (
                  <div tw="mb-10 text-sm text-center">
                    <span tw="italic">{t`my-work.live-url`}</span> <br />
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      tw="underline hover:text-primary-400"
                    >
                      {project.liveUrl}
                    </a>
                  </div>
                )}

                {project.gitUrl && (
                  <div tw="mb-10 text-sm text-center">
                    <span tw="italic">{t`my-work.git-url`}</span> <br />
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noreferrer"
                      tw="underline hover:text-primary-400"
                    >
                      {project.gitUrl}
                    </a>
                  </div>
                )}

                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <p tw="mt-10 text-sm sm:text-base">
                  <span tw="font-bold">{t`my-work.technologies`}</span> <br />
                  {project.techUsed}
                </p>
              </article>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
