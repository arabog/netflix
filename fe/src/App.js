import './App.scss';

import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Watch from "./pages/watch/Watch"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom"


function App() {
	const user = true


	return (
		<Router>
			<Switch>

				<Route exact path="/">
					{user ? <Home /> : <Register /> }
				</Route>

				<Route path="/register">
					{ !user ? <Register /> : <Redirect to = "/" /> }
				</Route>

				<Route path="/login">
					{ !user ? <Login /> : <Redirect to = "/" /> }
				</Route>

				{ user && (
						<>
							<Route path="/movies">
								<Home type = "movies" />
							</Route>

							<Route path="/series">
								<Home  type = "series" />
							</Route>

							<Route path="/watch">
								<Watch />
							</Route>			
						</>
					)
				}
			</Switch>
		</Router>
	)
}

export default App;
