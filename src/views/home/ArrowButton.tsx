import Image from 'next/image'

export const ArrowButton = () => {
  return (
    <div tw="w-full mt-auto flex">
      {/* TODO: add animation and behaviour to this button */}
      <button
        type="button"
        tw="relative mx-auto cursor-pointer hidden sm:block md:(w-16 h-16) lg:(w-20 h-20)"
        onClick={() => {
          alert('downButton')
        }}
      >
        <Image src="/svg/arrow.svg" layout="fill" />
      </button>
    </div>
  )
}
