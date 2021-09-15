import configs from '@/etc/configs'
import { P, Small, H3 } from '../basics'
import Image from 'next/image'
import { CSIconList } from '@/components/Icons/CSIcon'

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
          <P text="Welcome! I'm Carlos Henrique!" className="lg:text-lg mb-2xl" />
          <P text="I do other things too." className="lg:text-lg" />
          <a href="https://carlohcs.me" target="_blank" className="underline hover:animate-pulse" rel="noreferrer">
            <Small text="-> See" className="text-sm" />
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col divide-y divide-gray-500 h-full">
          <div>
            <P
              text="Brazilian producer and artist, Carlota Sounds is the product of the author’s intimate expression. It is a job in which he deepest feelings are explored: from loneliness, euphoria to the widest reflections. 
The songs are based on the exploration of musical instruments, using the voices as support."
              className="text-lg my-xs"
            />
            <P text="May the reflection of these sounds be with you." className="text-lg mb-md" />
          </div>

          <div>
            <H3 text="LISTEN AT" className="font-medium text-lg mb-xs mt-sm" />
            <CSIconList
              itemsClassName="text-gray-300 hover:text-white transition-colors"
              items={configs.listenAt}
              metricCategory="Listen at"
            />
          </div>

          <div>
            <H3 text="FOLLOW AT" className="font-medium text-lg mb-xs mt-sm" />
            <CSIconList
              itemsClassName="text-gray-300 hover:text-white transition-colors"
              items={configs.followAt}
              metricCategory="Follow at"
            />
          </div>

          <div>
            <H3 text="SHARE AT" className="font-medium text-lg mb-xs mt-sm" />
            <CSIconList
              itemsClassName="text-gray-300 hover:text-white transition-colors"
              items={configs.shareAt}
              metricCategory="Share at"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
