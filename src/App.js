import { Helmet } from 'react-helmet'
import './App.css'
import Url from './Url'

function App() {
	return (
		<>
			<Helmet>
				<title>URL Shortener</title>
			</Helmet>
			<div className="App">
				<h1>URL Shortener</h1>
				<Url />
			</div>
		</>
	)
}

export default App
