import { expect } from 'chai';
import {
  add,
  getEmoji,
  countEmojis,
  replaceWithEmojis,
  isOdd,
  eatsGreenApples,
  canEatJunkFood,
  reverseString,
  removeDuplicates,
  findFirstEven,
  filterNonPositive,
  countOccurrences,
  jsonToCsv,
  csvToJson
} from '../src/index.js';

describe('Fun and Interesting Unit Tests', function () {

  // 1. Basic Arithmetic
  it('should return the addition of two numbers', function () {
    expect(add(2, 3)).to.equal(5);
    expect(add(-1, 1)).to.equal(0);
    expect(add("2", 3)).to.equal(5);
    expect(add("2", "3")).to.equal(5);
    expect(add("2", "   3   ")).to.equal(5);
    expect(add("2", "ABC")).to.equal(2);
    expect(add("2", "")).to.equal(2);
    expect(add("2", null)).to.equal(2);
    expect(add(null, 3)).to.equal(3);
    expect(add(undefined, 3)).to.equal(3);
  });

  // 2.1: Return an emoji for a string keyword
  it('should return an emoji for a string keyword', function () {
    expect(getEmoji("smile")).to.equal("😊");
    expect(getEmoji("cry")).to.equal("😢");
    expect(getEmoji("heart")).to.equal("❤️");
    expect(getEmoji("unknown")).to.be.undefined;
  });

  // 2.2: Count the number of emojis in a string
  it('should count the number of emojis in a string', function () {
    expect(countEmojis("😊😊😢")).to.equal(3);
    expect(countEmojis("Hello 😊! How are you?")).to.equal(1);
    expect(countEmojis("No emojis here!")).to.equal(0);
  });

  // 2.3: Replace words with emojis
  it('should replace certain words with emojis', function () {
    const emojis = {
      "happy": "😊",
      "sad": "😢",
      "love": "❤️"
    };
    expect(replaceWithEmojis("I am happy", emojis)).to.equal("I am 😊");
    expect(replaceWithEmojis("I am sad", emojis)).to.equal("I am 😢");
    expect(replaceWithEmojis("I love you", emojis)).to.equal("I ❤️ you");
  });

  // 3. Check if a number is odd
  it('should check if a number is odd', function () {
    expect(isOdd(1)).to.be.true;
    expect(isOdd(4)).to.be.false;
    expect(isOdd(17)).to.be.true;
  });

  // 4. Green Apples Eating Habit
  it('Granny stopped eating green apples when she lost her teeth.', function () {
    const granny = { hasTeeth: false, age: 72, name: 'Granny Smith' };
    expect(eatsGreenApples(granny)).to.be.false;
  });

  it('Great granny loves green apples as she has teeth.', function () {
    const greatGranny = { hasTeeth: true, age: 85, name: 'Glamma' };
    expect(eatsGreenApples(greatGranny)).to.be.true;
  });

  // 5. Junk Food Eating Habit
  it('People should stop eating junk food at age 40 and above', function () {
    const uncleBob = { hasTeeth: true, age: 49, name: 'Donald Duck' };
    const youngTom = { hasTeeth: true, age: 25, name: 'Tom' };
    expect(canEatJunkFood(uncleBob)).to.be.false;
    expect(canEatJunkFood(youngTom)).to.be.true;
  });

  // 6. String Manipulation
  it('should reverse a string', function () {
    expect(reverseString('hello')).to.equal('olleh');
    expect(reverseString('world')).to.equal('dlrow');
  });

  // 7. Remove duplicates from an array
  it('should remove duplicates from an array', function () {
    expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    expect(removeDuplicates(['a', 'a', 'b', 'b', 'c'])).to.deep.equal(['a', 'b', 'c']);
  });

  // 8. Find the first even number in an array
  it('should find the first even number in an array', function () {
    expect(findFirstEven([1, 3, 7, 8, 10])).to.equal(8);
    expect(findFirstEven([1, 3, 5, 7])).to.be.undefined;
  });

  // 9. Filter out non-positive numbers
  it('should filter out all non-positive numbers from an array', function () {
    expect(filterNonPositive([1, -2, 3, 0, -5, 6])).to.deep.equal([1, 3, 6]);
    expect(filterNonPositive([-1, -2, -3])).to.deep.equal([]);
  });

  // 10. Count occurrences of a value
  it('should count the occurrences of a value in an array', function () {
    expect(countOccurrences([1, 2, 2, 3, 2, 4], 2)).to.equal(3);
    expect(countOccurrences([1, 2, 3, 4], 5)).to.equal(0);
  });

  // 11. Convert JSON to CSV
  it('should convert a JSON array of customers to CSV string format', function () {
    const customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-555-5555' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '555-555-5556' }
    ];
    const csv = "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    expect(jsonToCsv(customers)).to.equal(csv);
  });

  // 12. Convert CSV to JSON
  it('should convert a CSV string to an array of JSON objects', function () {
    const csv = "id,name,email,phone\n1,John Doe,john@example.com,555-555-5555\n2,Jane Doe,jane@example.com,555-555-5556";
    const customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-555-5555' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '555-555-5556' }
    ];
    expect(csvToJson(csv)).to.deep.equal(customers);
  });

});