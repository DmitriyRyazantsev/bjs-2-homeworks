function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	let avg;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	avg = sum / arr.length;
	avg = Number(avg.toFixed(2))
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let summElements = 0;
	for (let i = 0; i < arr.length; i++) {
		summElements = summElements + arr[i];
	}
	return summElements;
}

function differenceMaxMinWorker(...arr) {
	let minArr = arr[0];
	let maxArr = arr[0];
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (minArr > arr[i]) {
				minArr = arr[i];
			} else if (maxArr < arr[i]) {
				maxArr = arr[i];
			}
		}
		let difference = maxArr - minArr;
		return difference;
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difference = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement = sumEvenElement + arr[i];
			} else {
				sumOddElement = sumOddElement + arr[i];
			}
		}
		difference = sumEvenElement - sumOddElement;
		return sumOddElement, sumEvenElement, difference;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let quantityEvenElements = 0;
	let avarage = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement = sumEvenElement + arr[i];
				quantityEvenElements = quantityEvenElements + 1;
			}
		}
		avarage = sumEvenElement / quantityEvenElements;
		return avarage;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}