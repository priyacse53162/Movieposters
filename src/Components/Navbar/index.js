import './index.css'
import {Link,withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {IoMdSearch} from 'react-icons/io'

class Navbar extends Component {
  state = {searchinput: ''}
  updatesearchinput = event => {
    event.preventDefault()
    this.setState({searchinput: event.target.value})
  }
  sendinput = () => {
    const {searchinput} = this.state
    Cookies.set('searchinput', searchinput)
    this.setState({searchinput: ''})
  }
  render() {
    const {searchinput} = this.state
    return (
      <div className="navContainer">
        <h1 className="navtitle">movieDB</h1>
        <div className="buttonContainer">
          <Link to="/">
            <button className="navbutton">Popular</button>
          </Link>
          <Link to="/TopRated">
            <button className="navbutton">Top Rated</button>
          </Link>
          <Link to="/Upcoming">
            <button className="navbutton">Upcoming</button>
          </Link>
        </div>
        <div className="searchContainer">
          <input
            className="searchinput"
            type="search"
            value={searchinput}
            onChange={this.updatesearchinput}
          />
          <Link to="/Search">
            <button className="searchicon" onClick={this.sendinput}>
              <IoMdSearch size={20} />
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
