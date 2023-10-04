function compareArrays(arr1, arr2) {
	if (arr1.length === arr2.length) {
		return arr1.every((element, i) => element === arr2[i]);
	} else {
		return false;
	}
}

function getUsersNamesInAgeRange(users, gender) {
	let user;
	let result;
	return result = user.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);

}