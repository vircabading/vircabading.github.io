import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutMeView from './views/AboutMeView';
import ProjectsView from './views/ProjectsView';

/////////////////////////////////////////////
// App.js

function App() {
  return (
    <switch>
      <Route exact path="/">
        {/* **** HOME VIEW ************ */}
        <div id='title'>
            <h1>Hello World Val</h1>
            <p>2306121725</p>
            <HomeView />
        </div>
        {/* **** ABOUT ME VIEW ************ */}
        <div id='aboutme'>
          <div className='add-space-top' />
          <AboutMeView />
        </div>
        {/* **** PROJECTS VIEW ************ */}
        <div id='projects'>
          <div className='add-space-top' />
          <ProjectsView />
        </div>
      </Route>
    </switch>
  );
}

export default App;
