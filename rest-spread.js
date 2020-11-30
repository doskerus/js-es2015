// refactor this function
function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function (num) {
		return num % 2 === 0
	});
}

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

// findMin
const findMin = (...args) => Math.min(...args);

findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1

// mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // { a: 1, b: 2, c: 3, d: 4 }

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) =>
	[...arr, ...args.map((arg) => arg * 2)];

doubleAndReturnArgs([1, 2, 3], 4, 4) // [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

/** remove a random element in the items array and return a new array without that item */
const removeRandom = (items) => {
	const el = Math.floor(Math.random() * items.length);
	items.splice(el, 1);
	return [...items];
}

/** return a new array with every item in array1 and array2 */
const extend = (array1, array2) => [...array1, ...array2];

/** return a new object with all the keys and values from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** return a new object with a key removed */
const removeKey = (obj, key) => {
	({ [key]: undefined, ...obj } = obj);
	return obj;
}

/** combine two objects and return a new object */
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** return a new object with a modified key and value */
const update = (obj, key, val) => ({ ...obj, [key]: val });
