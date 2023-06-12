import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutMeView from './views/AboutMeView';
import ProjectsView from './views/ProjectsView';
import ContactInfoView from './views/ContactInfoView';

/////////////////////////////////////////////
// App.js

function App() {
  return (
    <switch>
      <Route exact path="/">
        {/* **** HOME VIEW ************ */}
        <div id='title'>
          <HomeView />
        </div>
        {/* **** ABOUT ME VIEW ************ */}
        <div id='aboutme'>
          <div className='add-space-top' />
          <AboutMeView />
        </div>
        {/* **** DIVIDER AFTER ABOUT ME **** */}
        <div className='bg-world-01' />
        {/* **** PROJECTS VIEW ************ */}
        <div id='projects'>
          <div className='add-space-top' />
          <ProjectsView />
        </div>
        {/* **** DIVIDER AFTER PROJECTS **** */}
        <div className='bg-makati-skyline' />
        {/* **** CONTACT INFO VIEW ************ */}
        <div id='contactinfo'>
          <div className='add-space-top' />
          <ContactInfoView />
        </div>
      </Route>
    </switch>
  );
}

export default App;
