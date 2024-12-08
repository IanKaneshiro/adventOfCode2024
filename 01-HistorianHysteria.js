class HistorianHysteria {
  constructor(input) {
    this.input = input;
    this.left = [];
    this.right = [];
    this.distances = [];
  }

  sortInput() {
    input.split("\n").forEach((s) => {
      const [first, second] = s.split("   ");
      this.left.push(Number(first));
      this.right.push(Number(second));
    });
  }

  sortLists() {
    this.left = this.left.sort((a, b) => a - b);
    this.right = this.right.sort((a, b) => a - b);
  }

  getDistances() {
    for (let i = 0; i < this.left.length; i++) {
      this.distances.push(Math.abs(this.left[i] - this.right[i]));
    }
  }

  totalDistance() {
    let total = 0;
    this.distances.forEach((n) => (total += n));
    return total;
  }
}

// const test = new HistorianHysteria(input);

// test.sortInput();
// test.sortLists();
// test.getDistances();
// console.log(test.totalDistance());

// part two

class HistorianHysteriaTwo extends HistorianHysteria {
  constructor(input) {
    super(input);
    this.hashMap = {};
    this.similarities = [];
  }

  createHashMap() {
    this.right.forEach((num) => {
      this.hashMap[num] = (this.hashMap[num] || 0) + 1; // Frequency count
    });
  }

  generateSimilarities() {
    for (let num of this.left) {
      this.similarities.push(num * (this.hashMap[num] || 0)); // Use hashMap for lookup
    }
  }

  reduceSimilarities() {
    return this.similarities.reduce((acc, el) => acc + el, 0);
  }
}

const two = new HistorianHysteriaTwo(input);
two.sortInput();
two.sortLists();
two.createHashMap();
two.generateSimilarities();
console.log(two.reduceSimilarities());
