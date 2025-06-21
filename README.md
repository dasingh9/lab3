# 🧪 JavaScript Lab: Fun with Unit Tests & Functions

Welcome to this lab exercise! In this activity, you'll practice writing functions to make test cases pass. From simple arithmetic to emoji fun, string and array manipulation, you'll tackle real-world logic challenges using JavaScript. 🧠✨

---

## 📁 Folder Structure

```
lab/
├── src/
│   └── index.js       # Your implementation goes here
├── test/
│   └── index.test.js  # Mocha + Chai test cases
├── README.md          # You're reading it!
```

---

## 🚀 How to Run the Tests

1. Make sure you have **Node.js** installed.
2. Install the required test dependencies (mocha, chai):
   ```bash
   npm install
   ```
3. Run the tests as below (package.json already contains a test script):
   ```bash
   npm test
   ```

---

## 📚 Your Tasks

Each test corresponds to a function in `src/index.js` that you need to complete. All test cases are written using Mocha and Chai.

### 1. Arithmetic
- `add(a, b)`: Return the sum of two numbers.

### 2. Emoji Playground
- `getEmoji(keyword)`: Map a keyword like `"smile"` to an emoji.
- `countEmojis(str)`: Count how many emojis appear in a string.
- `replaceWithEmojis(str, emojis)`: Replace certain words in a string with corresponding emojis from an object.

### 3. Number Checker
- `isOdd(num)`: Check if a number is odd.

### 4. Granny's Green Apples 🍏
- `eatsGreenApples(person)`: Return true only if the person has teeth.

### 5. Junk Food Logic
- `canEatJunkFood(person)`: People 40 or older should stop eating junk food.

### 6. String Work
- `reverseString(str)`: Reverse a given string.

### 7. Array Workouts
- `removeDuplicates(arr)`: Remove duplicates from an array.
- `findFirstEven(arr)`: Find the first even number.
- `filterNonPositive(arr)`: Remove 0 and negative numbers.
- `countOccurrences(arr, value)`: Count how many times a value occurs.

### 8. JSON <=> CSV
- `jsonToCsv(customers)`: Convert a JSON array of customers to CSV format.
- `csvToJson(csv)`: Convert a CSV string to an array of customer objects.

---

## 💡 Tips

- Run tests frequently as you work.
- Read the comments in `index.js` for guidance.
- Don't worry if a test fails — use it as a clue!
- Ask your mentor or instructor if you get stuck.

---

## ✅ Goal

Make **all tests pass** by implementing the corresponding functions.

Happy coding! 🚀