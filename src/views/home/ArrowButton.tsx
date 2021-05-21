import { forwardRef } from 'react'

export const ArrowButton = forwardRef<HTMLDivElement, { href?: string }>(
  ({ href }, ref) => {
    return (
      <div tw="w-full absolute bottom-0 mt-auto mb-5" ref={ref}>
        <a
          type="button"
          tw="relative mx-auto cursor-pointer hidden md:block md:(w-16 h-16) lg:(w-20 h-20)"
          href={href}
        >
          <svg
            width="56"
            height="78"
            viewBox="0 0 56 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="27.5416"
              y1="43"
              x2="27.5416"
              y2="3"
              stroke="black"
              strokeWidth="1.00957"
            />
            <path
              d="M27.4946 42.5717L29.8208 21.8108L29.0429 0.999983"
              stroke="black"
              strokeWidth="1.00957"
              tw="text-black dark:text-white stroke-current"
            />
            <path
              d="M11.4711 39.0897L45.7133 41.1407L26.816 69.7698L11.4711 39.0897Z"
              stroke="black"
              strokeWidth="1.064"
              tw="text-black dark:text-white stroke-current"
            />
            <path
              d="M44.7421 39.4194L28.7924 69.7895L10.466 40.7916L44.7421 39.4194Z"
              stroke="black"
              strokeWidth="1.064"
              tw="text-black dark:text-white stroke-current"
            />
          </svg>
        </a>
      </div>
    )
  }
)
