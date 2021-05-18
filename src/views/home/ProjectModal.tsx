import tw from 'twin.macro'
import { CloseButton } from '@components/Button/CloseButton'
import { Modal } from '@components/Modal'
import { Project } from './Projects'

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
  return (
    <Modal withOverlay onRequestClose={hide}>
      {({ ref }) => (
        <div
          ref={ref}
          tw="m-auto w-8/12 h-4/6 relative flex flex-col lg:flex-row rounded-md overflow-hidden"
        >
          <div tw="bg-blue-500 h-full w-full bg-opacity-70 flex[1 0 30%] lg:flex-1"></div>
          <div
            tw="bg-white dark:bg-black relative top-0 my-auto px-10 sm:px-20 py-12 w-full lg:w-3/5 h-full"
            css={[!isOdd ? tw`ml-auto` : tw`mr-auto`]}
          >
            <CloseButton onClick={hide} tw=" top-6 right-10" size="xl" />
            <div tw="height[95%] overflow-y-auto mt-10 sm:mt-0 max-w-xl mx-auto">
              <h3 tw="text-5xl font-sans text-center mt-10">{project.title}</h3>
              <article tw="pb-80 sm:pb-0 mt-10 space-y-5 text-lg text-justify overflow-x-auto">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
