import './App.css';
import Setting from './Setting'
import Example from './Example';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>     
      <Router>
      <Setting />
      <Switch>                   
                     <Route exact path="/Example" >
                       <Example/>
                     </Route>

                   
        </Switch>
      </Router>
   </>
  )
}

export default App;
