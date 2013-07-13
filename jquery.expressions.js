/**
* @license jQuery Expressions v1.0.0.0
* Copyright 2013 Kristopher Alexander
* Released under the MIT license
**/
(function($){
	$.fn.where = $.where = function(expression, collection) {
		var col = collection || this;
		return evaluateExpression(col, expression);
	}

	$.fn.first = $.first = function(expression, collection) {
		var col = collection || this;
		var result = !expression ? col : evaluateExpression(col, expression);
		return result[0];
	}

	$.fn.last = $.last = function(expression, collection) {
		var col = collection || this;
		var result = !expression ? col : evaluateExpression(col, expression);
		return result[result.length - 1];
	}

	$.fn.all = $.all = function(expression, collection) {
		var col = collection || this;
		var result = evaluateExpression(col, expression);
		return (col.length == result.length);
	}

	$.fn.any = $.any = function(expression, collection) {
		var col = collection || this;
		var result = evaluateExpression(col, expression);
		return (result.length > 0);
	}

	function evaluateExpression(collection, expression) {
		var result = [];
		function evaluate(index, value) { if (expression(value)) result.push(value); }
		
		if (collection.jquery)
			collection.each(evaluate);
		else
			$.each(collection, evaluate);

		if (collection.jquery)
			result = $(result);

		return result;
	}
}(jQuery))