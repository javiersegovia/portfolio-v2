import Image from 'next/image'

export const ArrowButton = () => {
  return (
    <div tw="w-full mt-auto flex">
      {/* TODO: add animation and behaviour to this button */}
      <button
        tw="mx-auto cursor-pointer"
        onClick={() => {
          alert('downButton')
        }}
      >
        <Image src="/svg/arrow.svg" width={80} height={80} />
      </button>
    </div>
  )
}
