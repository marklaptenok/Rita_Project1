'use strict';

//var building = 5;
//console.log(building);


try {
	
	//	Код ниже не будет работать:
	
	for (var floor in building.floors) {
		console.log(building.floors[floor]);
	}
	
}
catch {

	//	А вот так можно "коммуницировать" с переменной building из файла main.js:
	
	window.main.showAmountOfFlatsOnEachFloor();

};