import {TailSpin} from 'react-loader-spinner'
import './index.css' // Ensure this file contains the necessary styles

const LoaderView = () => (
  <div className="loader-div">
    <TailSpin color="#0074D9" height={80} width={80} className="loader" />
    <h1 className="loader-text">Loading...</h1>
  </div>
)

export default LoaderView
