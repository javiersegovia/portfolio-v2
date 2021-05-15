import _tw from 'twin.macro'

// todo: move personal data to ENV

export const Footer = () => {
  return (
    <footer tw="w-full flex bg-teal-500 text-white dark:text-black font-bold text-lg py-12">
      <div tw="space-y-2 mx-auto text-center">
        <ul tw="flex mx-auto space-x-4">
          <li>Icon 1</li>
          <li>Icon 2</li>
          <li>Icon 3</li>
        </ul>
        <p>hey@sjavier.com</p>
        <p>+58 9999 153</p>
      </div>
    </footer>
  )
}
