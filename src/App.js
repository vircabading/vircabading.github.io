import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeView from './components/HomeView';

/////////////////////////////////////////////
// App.js

function App() {
  return (
    <switch>
      <Route exact path="/">
        <div id='title'>
            <h1>Hello World Val</h1>
            <p>2306121551</p>
            <HomeView />
        </div>
      </Route>
    </switch>
  );
}

export default App;
