import { Circle } from '@components/UI'
import tw, { styled } from 'twin.macro'
import { down } from 'styled-breakpoints'

export const StyledPhoneWrapper = styled.div`
  width: 386px;

  ${down('sm')} {
    ${tw`w-full`}
  }

  ${tw`absolute mt-auto mx-auto bottom-0 left-0 right-0`}
`

export const StyledContactWrapper = styled.div`
  width: 320px;
  height: 685px;

  ${tw`z-10 flex max-w-full relative sm:absolute mx-auto mt-auto mb-20 top-16 left-0 right-0`}
`

export const StyledGuy = styled.div`
  margin-left: 178px;

  ${tw`absolute bottom-0 left-1/2 -mb-4`}
`

export const CustomCircle = styled(Circle)`
  width: 220px;

  ${down('md')} {
    width: 160px;
    height: 160px;
  }
`

export const MovieBG = styled.div`
  background-image: url('/img/movie.png');
  animation: movie 1s steps(4) infinite;
  height: 200%;
  left: -50%;
  top: -50%;
  width: 200%;

  ${tw`opacity-70 fixed pointer-events-none z-50`}

  @keyframes movie {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    10% {
      -webkit-transform: translate(-5%, -5%);
      transform: translate(-5%, -5%);
    }
    20% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%);
    }
    30% {
      -webkit-transform: translate(5%, -10%);
      transform: translate(5%, -10%);
    }
    40% {
      -webkit-transform: translate(-5%, 15%);
      transform: translate(-5%, 15%);
    }
    50% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%);
    }
    60% {
      -webkit-transform: translate(15%, 0);
      transform: translate(15%, 0);
    }
    70% {
      -webkit-transform: translate(0, 10%);
      transform: translate(0, 10%);
    }
    80% {
      -webkit-transform: translate(-15%, 0);
      transform: translate(-15%, 0);
    }
    90% {
      -webkit-transform: translate(10%, 5%);
      transform: translate(10%, 5%);
    }
    to {
      -webkit-transform: translate(5%, 0);
      transform: translate(5%, 0);
    }
  }
`
