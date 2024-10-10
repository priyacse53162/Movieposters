import './index.css'
import {Component} from 'react'
import Navbar from '../Navbar'
import MovieCard from '../MovieCard'
import Loaderclass from '../Loaderclass'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
}
class TopRated extends Component {
  state = {fetchstatus: status.loading, topmoviedetails: []}
  componentDidMount() {
    this.gettopratedmovie()
  }
  gettopratedmovie = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=${1e1fbd5440d79c4b6cb811e5e5ad8cf1}&language=en-US&page=1'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTFmYmQ1NDQwZDc5YzRiNmNiODExZTVlNWFkOGNmMSIsIm5iZiI6MTcyODM4NDA4My4yNTE3ODQsInN1YiI6IjY3MDUwN2RkOThkZjhlYTAxNTFkNDVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VRmANlTTbEBl1gR0UPZTFDdoF8us4cpVcMY_gHM_A40`,
      },
    }
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
    const response = await fetch(url, options)
    const data = await response.json()
    const converteddata = data.results.map(eachitem => convertedmovie(eachitem))

    this.setState({topmoviedetails: converteddata, fetchstatus: status.success})
  }
  loadingview = () => {
    return <Loaderclass />
  }
  returnmovie = () => {
    const {topmoviedetails} = this.state
    return (
      <ul className="movieContainer">
        {topmoviedetails.map(eachitem => (
          <MovieCard key={eachitem.id} moviedetails={eachitem} />
        ))}
      </ul>
    )
  }
  updatebasedonstatus = () => {
    const {fetchstatus} = this.state
    switch (fetchstatus) {
      case status.loading:
        return this.loadingview()
      case status.success:
        return this.returnmovie()
      default:
        return null
    }
  }
  render() {
    return (
      <>
        <Navbar />
        {this.updatebasedonstatus()}
      </>
    )
  }
}

export default TopRated
