import './App.css';
import { Switch, Route } from 'react-router-dom';

/////////////////////////////////////////////
// App.js

function App() {
  return (
    <switch>
      <Route exact path="/">
        <div className="App">
          <h1>Hello World Val</h1>
          <p>2306120340</p>
        </div>
      </Route>
    </switch>
  );
}

export default App;
