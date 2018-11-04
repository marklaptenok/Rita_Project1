'use strict';

//	Обёртка function ограничивает область видимости. Синтаксис такой: (function)() { <Область видимости> })();

(function () {

	var building = {
		name: 'house',
		floors: {f_1: 0, f_2: 1, f_3: 2, f_4: 34}
	};

	var showAmountOfFlatsOnEachFloor = function () {
		for (var floor in building.floors) {
			console.log(building.floors[floor]);
		}
	};
	
	//	Ниже способ "коммуникации" других скриптов, например alert.js, с переменными и функциями внутри обёртки function. По правилам хорошего тона называть объект - подобъект window - следует по названию js-файла. Я сделал публичной функцию showAmountOfFlatsOnEachFloor.
	
	window.main = {
		showAmountOfFlatsOnEachFloor: showAmountOfFlatsOnEachFloor
	};
	
})();



