import Login from './Login/Login';
import Register from './Register/Register';
import Xyz from './Xyz';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
function App() {
return (
	<div className="App">
	<Router>
	<Login/>
    <Xyz/>
	 <Switch>
          <Route exact path="/register" component={Xyz} />
		  </Switch>
       
     </Router>
		
	</div>
);
}

export default App;
