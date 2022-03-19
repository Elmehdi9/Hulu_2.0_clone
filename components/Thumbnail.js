import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function Thumbnail({result}){
  const Base_Url = "https://image.tmdb.org/t/p/original/"
  return (
    <div className='p-2 group cursor-pointer transition duration-100 ease-in transform 
    sm:hover:scale-105 hover:z-50'>
        <Image
        layout='responsive'
        src = {
          `${Base_Url}${result.backdrop_path || result.poster_path}
          ` }
          height={1080}
          width={1920}
        />

        <div>
          <p className='truncate max-w-md'>{result.overview}</p>
          <h2 className='text-2xl group-hover:font-bold'>
            {result.title}
          </h2>
          <p className='flex opacity-0 group-hover:opacity-100' >
            {result.release_date}{" • "}
            <ThumbUpIcon className='h-5 mx-2' />{result.vote_count}
          </p>
        </div>
    </div>
  )
}

export default Thumbnail