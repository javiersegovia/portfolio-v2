import _tw from 'twin.macro'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { constants } from '@lib/utils/constants'

// todo: move personal data to ENV

const { linkedinProfile, githubProfile, contactEmail } = constants

export const Footer = () => {
  return (
    <footer tw="w-full flex bg-primary-400 text-black font-bold text-lg py-12">
      <div tw="space-y-2 mx-auto text-center">
        <ul tw="flex mx-auto space-x-4 text-3xl justify-center mb-2">
          <li>
            <a href={linkedinProfile} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href={githubProfile} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </div>
    </footer>
  )
}
