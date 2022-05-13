	import './App.css';
	import Login from './components/Login';
	import img from './assets/img01.png'; 

	function App() {

		return (
			<>
				<div className="App">
					<Login />
					
					{/* <div id="bg-right">
						<img src={img} alt="img" id="img" />
					</div> */}
				</div>
				<div className="temp-footer">Haillie Jo / 2022</div>
			</>
		);
	}

	export default App;
