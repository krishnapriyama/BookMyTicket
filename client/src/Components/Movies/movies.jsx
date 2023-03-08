import React from 'react'

const movies = () => {
  return (
     <div class="items-center justify-center">
        <h1 className="text-center font-bold text-2xl">New Release Movies</h1>

        <div
          class="mx-auto grid max-w-full items-center grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} class="grid-item" style={{ width: '250px' }}>
              <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <div class="relative flex items-center overflow-hidden rounded-xl ">
                  <img
                    src="https://i.pinimg.com/originals/79/8b/4f/798b4f39e2b76774fb2f3f167409c6cd.jpg"
                    alt="dark"
                  />
                </div>
                <div class="mt-1 p-2 items-center justify-center">
                  <h2 class="text-slate-700 items-center justify-center">
                    THE DARK
                  </h2>
                  <p class="mt-1 text-sm text-slate-400">
                    Action/Adventure/Crime/Thriller
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
  )
}

export default movies
