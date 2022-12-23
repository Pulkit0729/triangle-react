import React, { useContext } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import classes from './Navbar.module.css'
import {ReactComponent as Logo} from '../svg/triangleLogo.svg';
function NavBar() {
  return (
    <nav className="navbar navbar-light border border-bottom navbar-expand bg-white fixed-top">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand ms-4" href='/' >
          <Logo height={30} />
        </a>
        <ul className="navbar-nav ms-auto align-items-center align-items-center d-flex">
          <li class="nav-item border-end mx-2 px-3">
            <NotificationsIcon className="text-secondary" />
            {/* <NotificationDropdown aria-labelledby="notif" /> */}
          </li>
          <li class="nav-item dropdown align-items-center d-flex">
            <a class={`${classes.prof} nav-link dropdown-toggle`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src='../images/prof.jpg' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;