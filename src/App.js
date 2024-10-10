import './App.css'
import Home from './Components/Home'
import Upcoming from './Components/Upcoming'
import Search from './Components/Search'
import MovieDetails from './Components/MovieDetails'
import TopRated from './Components/TopRated'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// write your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/Upcoming" component={Upcoming} />
      <Route exact path="/TopRated" component={TopRated} />
      <Route exact path="/Search" component={Search} />
    </Switch>
  </BrowserRouter>
)

export default App
