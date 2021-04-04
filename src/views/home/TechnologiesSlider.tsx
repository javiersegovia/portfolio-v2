import Slider from 'react-slick'
import Image from 'next/image'
import { Settings } from 'react-slick'

const slideSettings: Settings = {
  slidesToShow: 10,
  slidesToScroll: 1,
  speed: 1500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  adaptiveHeight: true,
  pauseOnHover: true,
}

// Todo: Add tooltips to every item

const IMAGE_WIDTH = 40
const IMAGE_HEIGHT = 40

const imagePaths = [
  '/svg/icon-react.svg',
  '/svg/icon-graphql.svg',
  '/svg/icon-docker.svg',
  '/svg/icon-nextjs.svg',
  '/svg/icon-nestjs.svg',
  '/svg/icon-nodejs.svg',
  '/svg/icon-ruby.svg',
  '/svg/icon-rails.svg',
  '/svg/icon-reactquery.svg',
  '/svg/icon-redux.svg',
  '/svg/icon-apollo.svg',
  '/svg/icon-prisma.svg',
  '/svg/icon-postgresql.svg',
]

export const TechnologiesSlider = () => {
  return (
    <Slider {...slideSettings} tw="max-w-xs sm:max-w-md ">
      {imagePaths.map((imgPath) => (
        <Image
          key={imgPath}
          src={imgPath}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
      ))}
    </Slider>
  )
}
