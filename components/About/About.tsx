import { P, Small, H3 } from '../basics'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col w-full h-full space-y-6 text-left">
      <div className="flex flex-row w-full">
        <Image
          src="/carlohcs.jpeg"
          alt="Carlos Henrique Carvalho de Santana"
          width="100%"
          height="100%"
          className="rounded-full"
        />
        <div className="flex flex-col w-full h-full justify-center pl-sm">
          <P text="Hi!" className="lg:text-lg mb-2xl" />
          <P text="I do other things too :)" className="lg:text-lg" />
          <Small text="See" className="text-sm" />
        </div>
      </div>
      <div className="h-full">
        <div className="flex flex-col space-y-6">
          <P
            text="Brazilian producer and artist, Carlota Sounds is the product of the author’s intimate expression. It is a job in which he deepest feelings are explored: from loneliness, euphoria to the widest reflections. 
The songs are based on the exploration of musical instruments, using the voices as support."
            className="lg:text-lg"
          />
          <P text="May the reflection of these be with you." className="lg:text-lg" />
          <H3 text="LISTEN AT" />
          <H3 text="FOLLOW AT" />
        </div>
      </div>
    </div>
  )
}

export default About
