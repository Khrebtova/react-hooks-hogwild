import React, {useState} from "react";
import Nav from "./Nav";
import PigTile from "./PigTile"
import Details from "./Details"
import Sort from "./Sort"
// import Card from "./card";
import NewPigForm from "./NewPigForm"

import hogs from "../porkers_data";

function App() {
	const [pigarray, setPigarray] = useState(hogs)
	const [selectedPig, setSelectedPig] = useState({})
	const [isChecked, setIsChecked] = useState(false)
	const [sortBy, setSortBy] = useState('name')
	const [newPig, setNewPig] = useState({
		name: "",
		specialty: "",
		greased: false,
		weight: "",
		"highest medal achieved": "",
		image: ""
	})
	
	function handleSelect(pig){
		console.log("click on pig " + pig.name)
		const newSelect = pig
		setSelectedPig(newSelect)
	}

	function handleCheckbox(){
		let sortedarray =[]
		if(isChecked === false){
			sortedarray = pigarray.filter((pig) => pig.greased === true)
		}else{
			sortedarray = hogs			
		}
		setPigarray(sortedarray)
		setIsChecked(!isChecked)
	}

	function handleSort(e){
		const newsort = e.target.value
		console.log("sort by: " + newsort)
		setSortBy(newsort)
		const sortedArray = [...pigarray]
		sortedArray.sort((a, b) => a[newsort] > b[newsort] ? 1 : -1)
		setPigarray(sortedArray)
	}

	function handleAddNewPig(e){
		e.preventDefault()
		const newarray = [...pigarray, newPig]
		setPigarray(newarray)
		e.target.reset()
	}

	const pigList = pigarray.map((pig) => {
		return (
			// <Card key = {pig.name} pig ={pig} handleClick={handleSelect}/>
			<PigTile key = {pig.name} pig ={pig} handleClick={handleSelect}/>
		)
	})

	return (
		<div className="App">
			<Nav />
			<label>
				<input type = "checkbox" checked = {isChecked} onChange={handleCheckbox}/>
				Show just greased hogs
			</label> 
			<Sort handleChange = {handleSort} sortBy={sortBy}/> 
			{selectedPig.name ? <Details pig={selectedPig}/> : null}
			{/* {selectedPig.name ? <Card pig={selectedPig}/> : null} */}
			<div >
				{pigList}
			</div>
			<NewPigForm pigData = {newPig} setNewPig={setNewPig} handleAddNewPig={handleAddNewPig}/>
					
		</div>
	);
}

export default App;
