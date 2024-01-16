import { Route, Router } from '@solidjs/router'
import './App.css'
import Main from './routes/main'

function App() {
	return (
		<>
			<Router>
				<Route path="/" component={Main} />
				<Route path="*" component={Main} />
			</Router>
		</>
	)
}

export default App
