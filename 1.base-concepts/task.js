"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	}

	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let n = countMonths;
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	let result = payment * n;
	result = result.toFixed(2);
	let sum = parseFloat(result);
	return sum;

}