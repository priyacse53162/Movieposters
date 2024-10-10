import "./index.css"
import Loader from 'react-loader-spinner'

const Loaderclass = () => {
  return(
    <div className="loader">
      <Loader color="#416fbf" type="ThreeDots" height="50" width="50" />
    </div>
  )
}

export default Loaderclass
