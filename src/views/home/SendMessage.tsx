import React from 'react'

export const SendMessage = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} tw="bg-white m-auto rounded-md px-10 py-12 max-w-md w-full">
      <div tw="text-center">
        <h4 tw="text-5xl">Message me</h4>
        <p tw="text-sm mt-4">
          Want to say something? I&apos;m glad to hear it!
        </p>
      </div>

      {/* here goes the form... */}
    </div>
  )
})
