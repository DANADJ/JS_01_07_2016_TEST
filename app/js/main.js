var mainJS = (function () {

	var allItems = document.getElementsByClassName('accordeon-item'),//Беру из документа все элементы с нужным классом и
	// сохраняю их в массив
		quantityOfHeadings = allItems.length;//Узнаю количество элементов и сохраняю это число в переменную

	/*Функция установки класса .active*/
	var addActiveClass = function (elem) {
		for (var en = 0; en < quantityOfHeadings; en++) {
			if (allItems[en] === elem) {
				if (elem.className === 'accordeon-item') {
					elem.className = 'accordeon-item active';
				} else {
					elem.className = 'accordeon-item';
				}
			} else {
				allItems[en].className = 'accordeon-item';
			}
		}
	};

	/*Функция прослушивания событий*/
	var _setUpListners = function () {

		/*Прослушивание клика по любому заголовку для запуска функции установки класса .active*/

		for (var i = 0; i < quantityOfHeadings; i++) {
			var elem = allItems[i];
			elem.addEventListener('click', function (event) {
				event.preventDefault();
				addActiveClass(this);
			});
		}
	};

	/*Функция инициализации модуля*/
	var init = function () {
		_setUpListners();
	};

	/*Возвращаем объект из модуля*/
	return {
		init: init
	};
})();

mainJS.init();