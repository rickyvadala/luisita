document.addEventListener("DOMContentLoaded", function(event) {

	var filter_r = document.getElementById('filter_r');
	var filter_s = document.getElementById('filter_s');
	var filter_a = document.getElementById('filter_a');
	var moneyFormat = wNumb({
		decimals: 0,
		suffix: ' $'
	});
	noUiSlider.create(filter_r, {
		connect: true, format: moneyFormat, connect: true,
		start: [20, 80],
		range: {
			'min': 0,
			'max': 100
		},
	});
	noUiSlider.create(filter_s, {
		connect: true, format: moneyFormat, connect: true,
		start: [20, 80],
		range: {
			'min': 0,
			'max': 100
		},
	});
	noUiSlider.create(filter_a, {
		connect: true, format: moneyFormat, connect: true,
		start: [20, 80],
		range: {
			'min': 0,
			'max': 100
		},
	});
	function ParamsSl(nameUIslider, slide01, slide02) {
		nameUIslider.noUiSlider.on('update', function(values) {
			document.getElementById(slide01).innerHTML = values[0];
			document.getElementById(slide02).innerHTML = values[1];
			document.getElementsByName('min-value').value = moneyFormat.from(
			values[0]);
			document.getElementsByName('max-value').value = moneyFormat.from(
			values[1]);
		});
	}
	ParamsSl(filter_r, 'slider-range-value1','slider-range-value2');
	ParamsSl(filter_s, 'slider-s-value1','slider-s-value2');
	ParamsSl(filter_a, 'slider-a-value1','slider-a-value2');

});