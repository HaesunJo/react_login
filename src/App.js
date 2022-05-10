	import './App.css';
	import Login from './components/Login';
	import img from './assets/img01.png'; 

	function App() {

	return (
		<div className="App">
			<Login />
			
			<div id="bg-right">
				<img src={img} alt="img" id="img" />
			</div>
		</div>
	);
	}

	export default App;
