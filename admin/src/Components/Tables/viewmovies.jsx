import React from 'react'

const viewmovies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error))
  }, [])


  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div class="relative overflow-x-auto ">
          <table class="text-sm text-left text-white rounded-2xl">
            <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-400 text-center text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Movie name
                </th>
                <th scope="col" class="px-6 py-3">
                  release date
                </th>
                <th scope="col" class="px-6 py-3">
                  Genre
                </th>
                <th scope="col" class="px-6 py-3">
                  language
                </th>
                <th scope="col" class="px-6 py-3">
                  Trailer link
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {movies.map(movie => (
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4 text-black font-medium">{movie.name}</td>
                <td class="px-6 py-4 text-black font-medium">{movie}</td>
                <td class="px-6 py-4 text-black font-medium">Laptop</td>
                <td class="px-6 py-4 text-black font-medium">Laptop</td>
                <td class="px-6 py-4 items-center flex justify-center">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Block
                  </button>
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default viewmovies
