import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p>Wave</p>
    </div>
    <div>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
