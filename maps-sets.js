// quick question #1
// what does the following code return?
new Set([1, 1, 2, 2, 3, 4]); // Set(4) { 1, 2, 3, 4 }

// quick question #2
// what does the following code return?
[...new Set("referee")].join(""); // "ref"

// quick questions #3
// what does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true); // Map(1) { [1, 2, 3] => true }
m.set([1, 2, 3], false); // Map(2) { [1, 2, 3] => true, [1, 2, 3] => false }

// write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

// hasDuplicate()
function hasDuplicate(arr) {
	return arr.length !== [...new Set(arr)].length;
}

// write a function called vowelCount which accepts a string and returns a map where the keys are vowels and the values are the count of the vowels in the string
vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }

// vowelCount()
function vowelCount(str) {
	const vowelMap = new Map();
	for (let char of str.toLowerCase()) {
		let count = 1;
		if ('aeiou'.indexOf(char) !== -1) {
			if (!vowelMap.has(char)) {
				vowelMap.set(char, count);
			}
			else {
				count = vowelMap.get(char) + 1;
				vowelMap.set(char, count);
			}
		}
	}
	return vowelMap;
}
