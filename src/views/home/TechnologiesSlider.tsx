import Slider from 'react-slick'
import Image from 'next/image'
import { Settings } from 'react-slick'
import _tw from 'twin.macro'

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

export const TechnologiesSlider = () => {
  return (
    <Slider {...slideSettings} tw="max-w-md">
      <Image src="/svg/icon-react.svg" width={40} height={40} />
      <Image src="/svg/icon-graphql.svg" width={40} height={40} />
      <Image src="/svg/icon-docker.svg" width={40} height={40} />
      <Image src="/svg/icon-nextjs.svg" width={40} height={40} />
      <Image src="/svg/icon-nestjs.svg" width={40} height={40} />
      <Image src="/svg/icon-nodejs.svg" width={40} height={40} />
      <Image src="/svg/icon-ruby.svg" width={40} height={40} />
      <Image src="/svg/icon-rails.svg" width={40} height={40} />
      <Image src="/svg/icon-reactquery.svg" width={40} height={40} />
      <Image src="/svg/icon-redux.svg" width={40} height={40} />
      <Image src="/svg/icon-apollo.svg" width={40} height={40} />
      <Image src="/svg/icon-prisma.svg" width={40} height={40} />
      <Image src="/svg/icon-postgresql.svg" width={40} height={40} />
    </Slider>
  )
}
