import { Container, Title } from '@components/UI'
import { GuyPresenting } from '@components/SVG/GuyPresenting'
import { ProjectShowcase } from './ProjectShowcase'

export interface Project {
  title: string
  shortDescription: string
  description: string[]
  gitUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'HoyTrabajas',
    shortDescription:
      'A colombian-based company that finds the perfect candidate match for hundreds of job offers.',
    description: [
      'HoyT sit sunt dolore consectetur consectetur Lorem ea tempor qui laborum sit officia aliquip. Voluptate et reprehenderit consectetur adipisicing duis dolore. Laboris non ea irure enim laboris ea ea. Deserunt reprehenderit magna labore nostrud ullamco aliquip id officia id. Ex tempor id est dolor amet tempor eu commodo deserunt. Ad occaecat eiusmod sunt aliqua quis.',
      'Do sit sunt dolore consectetur consectetur Lorem ea tempor qui laborum sit officia aliquip. Voluptate et reprehenderit consectetur adipisicing duis dolore. Laboris non ea irure enim laboris ea ea. Deserunt reprehenderit magna labore nostrud ullamco aliquip id officia id. Ex tempor id est dolor amet tempor eu commodo deserunt. Ad occaecat eiusmod sunt aliqua quis.',
    ],
    liveUrl: 'https://hoytrabajas.com',
  },
  {
    title: 'Antonio Ecarri',
    shortDescription: `Promotional page for Antonio Ecarri,
    President of Alianza del Lápiz
    President of Fundación Casa Uslar Pietri`,
    description: [
      'Ant sit sunt dolore consectetur consectetur Lorem ea tempor qui laborum sit officia aliquip. Voluptate et reprehenderit consectetur adipisicing duis dolore. Laboris non ea irure enim laboris ea ea. Deserunt reprehenderit magna labore nostrud ullamco aliquip id officia id. Ex tempor id est dolor amet tempor eu commodo deserunt. Ad occaecat eiusmod sunt aliqua quis.',
      'Do sit sunt dolore consectetur consectetur Lorem ea tempor qui laborum sit officia aliquip. Voluptate et reprehenderit consectetur adipisicing duis dolore. Laboris non ea irure enim laboris ea ea. Deserunt reprehenderit magna labore nostrud ullamco aliquip id officia id. Ex tempor id est dolor amet tempor eu commodo deserunt. Ad occaecat eiusmod sunt aliqua quis.',
    ],
  },
  {
    title: 'EB2B',
    shortDescription: `A PaaS built for B2B ecommerce. 
    Side project still in development.`,
    description: [
      'Eb2b sit sunt dolore consectetur consectetur Lorem ea tempor qui laborum sit officia aliquip. Voluptate et reprehenderit consectetur adipisicing duis dolore. Laboris non ea irure enim laboris ea ea. Deserunt reprehenderit magna labore nostrud ullamco aliquip id officia id. Ex tempor id est dolor amet tempor eu commodo deserunt. Ad occaecat eiusmod sunt aliqua quis.',
      'Do sit sunt dolore consectetur consectetur Lorem ea tempor qui laborum sit officia aliquip. Voluptate et reprehenderit consectetur adipisicing duis dolore. Laboris non ea irure enim laboris ea ea. Deserunt reprehenderit magna labore nostrud ullamco aliquip id officia id. Ex tempor id est dolor amet tempor eu commodo deserunt. Ad occaecat eiusmod sunt aliqua quis.',
    ],
  },
]

export const Projects = () => {
  return (
    <>
      <Title tw="text-center mt-20 mb-10 sm:mt-0 md:mb-0">
        Recent <span tw="text-teal-500">work</span>
      </Title>

      <Container tw="relative w-full h-auto flex flex-col items-center justify-center md:(flex-row) space-x-5 md:max-w-screen-xl">
        <div tw="bg-white mt-48 p-14 border-2 border-teal-500 rounded-lg md:(border-none p-0) lg:p-0 md:mt-0 lg:bg-transparent z-10">
          <div tw="max-w-2xl space-y-20 md:space-y-56 mt-0 md:mt-20">
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
          <GuyPresenting tw="absolute top-0 left-0 right-0 mx-auto max-w-full md:relative width[330px] md:width[auto]" />
        </div>
      </Container>
    </>
  )
}
