import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from "../public/3.jpg"

const SocialTracker: NextPage = () => {
  return (
    <div>
      <h1 className='text-xl text-indigo-600 mb-4 font-bold'>
        Social Media Tracker
      </h1>
      <Image src={projectImage} />
        <div className='mt-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem saepe ut vitae, totam repudiandae adipisci nisi voluptate dicta dignissimos quia minus, natus animi quibusdam, accusantium nostrum sit deleniti earum. Asperiores inventore natus dolor reprehenderit odio nemo? Ut laudantium, dolorum obcaecati quod ipsam exercitationem fugit minima, sequi id debitis delectus veritatis.
        </div>
        <div className='mt-6'>
          <Link href ="/" >
            <a href={'/'} className='font-bold underline hover:text-indigo-600'>Back</a>
          </Link>  </div>
    </div>
  )
}

export default SocialTracker
