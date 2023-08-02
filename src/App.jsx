import SideMenu from './components/SideMenu'
import NotificationsIcon from '@mui/icons-material/Notifications';
import alDar from './assets/aldar.png'
import profilePic from './assets/profile.png'
import './app.scss';
import DashboardController from './components/DashboardControl/DashboardController';

function App() {
  return (
    <>
      <nav id="main-nav">
        <div className="left-wrapper">
          <SideMenu />
          <a href=''>
            <img src={alDar} />
          </a>
          <h1>
            CIVILSOFT <span>HCMS</span>
          </h1>
        </div>
        <div className="right-wrapper">
          <button id="nav-notifications">
            <NotificationsIcon />
          </button>
          <figure>
            <img src={profilePic} />
            <figcaption>
            </figcaption>
          </figure>
        </div>
      </nav>
      <div className="container">
        <DashboardController />
      </div>
    </>
  );
}

export default App;
