import React from 'react'

const movies =[{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
}]

const movieSlide = () => {
  return (
    <div>
        <div className='flex px-2 overflow-x-scroll overflow-y-hidden scroll-smooth scroll-m-0 scrollbar-hide'>
            {movies.map((movie, index) => {
                return (
                    <div key={index} className='w-[21rem] max-w-[100%] bg-black rounded-xl p-3 text-white m-5 flex flex-col duration-300 cursor-pointer text-xl hover:scale-110'>
                        <img
                            className='max-w-lg self-center rounded-lg h-[286px]'
                            src="https://i.pinimg.com/originals/79/8b/4f/798b4f39e2b76774fb2f3f167409c6cd.jpg"
                            alt='poster'
                        />
                        <h3 className='my-1 text-center'>{movie.title}</h3>
                        <h3 className='my-1  text-sm'>⭐{movie.vote_average}/10</h3>
                    </div>)
            })}
        </div>
    </div>
  )
}

export default movieSlide
