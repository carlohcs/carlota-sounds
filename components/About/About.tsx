import configs from '@/etc/configs'
import { P, Small, H3 } from '../basics'
import Image from 'next/image'
import { CSIconList } from '../Icons/CSIcon'

const About = () => {
  return (
    <div className="flex flex-col min-w-full w-full h-full space-y-6 text-left p-md">
      <div className="w-full flex flex-row">
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
      <div className="w-full h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <P
              text="Brazilian producer and artist, Carlota Sounds is the product of the author’s intimate expression. It is a job in which he deepest feelings are explored: from loneliness, euphoria to the widest reflections. 
The songs are based on the exploration of musical instruments, using the voices as support."
              className="text-lg my-xs"
            />
            <P text="May the reflection of these be with you." className="text-lg mb-md" />
          </div>

          <div>
            <H3 text="LISTEN AT" className="font-medium text-lg my-xs" />
            <CSIconList items={configs.listenAt} />
          </div>

          <div>
            <H3 text="FOLLOW AT" className="font-medium text-lg my-xs" />
            <CSIconList items={configs.followAt} />
          </div>

          <div>
            <H3 text="SHARE AT" className="font-medium text-lg my-xs" />
            <CSIconList items={configs.shareAt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
