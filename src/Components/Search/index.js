import './index.css'
import MovieCard from '../MovieCard'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'

class Search extends Component {
  state = {filteredlist: []}
  componentDidMount() {
    this.searchmovies()
  }
  searchmovies = async () => {
    const input = Cookies.get('searchinput')
    console.log(input)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${'1e1fbd5440d79c4b6cb811e5e5ad8cf1'}&language=en-US&query=${input}&page=1`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTFmYmQ1NDQwZDc5YzRiNmNiODExZTVlNWFkOGNmMSIsIm5iZiI6MTcyODM4NDA4My4yNTE3ODQsInN1YiI6IjY3MDUwN2RkOThkZjhlYTAxNTFkNDVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRmANlTTbEBl1gR0UPZTFDdoF8us4cpVcMY_gHM_A40`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const convertedmovie = data => ({
      adult: data.adult,
      backdropPath: data.backdrop_path,
      genreIds: data.genre_ids,
      id: data.id,
      originalLanguage: data.original_language,
      originalTitle: data.original_title,
      overview: data.overview,
      popularity: data.popularity,
      posterPath: data.poster_path,
      releaseDate: data.release_date,
      title: data.title,
      video: data.video,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
    })
    const converteddata = data.results.map(eachitem => convertedmovie(eachitem))
    this.setState({filteredlist: converteddata})
  }
  render() {
    const {filteredlist} = this.state
    return (
      <>
        <Navbar />
        {filteredlist.length > 0 ? (
          <ul className="searchedmovie">
            {filteredlist.map(eachitem => (
              <MovieCard moviedetails={eachitem} key={eachitem.id} />
            ))}
          </ul>
        ) : (
          <h1>No movies Found</h1>
        )}
      </>
    )
  }
}
export default Search
