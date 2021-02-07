//https://leetcode.com/problems/min-stack/
//a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MinStack {
  stack: { val: number; min: number }[];
  min: number;

  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(x: number): void {
    this.stack.push({ val: x, min: this.min });
    this.min = Math.min(this.min, x);
  }

  pop(): void {
    const { min } = this.stack.pop();
    this.min = min;
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.min;
  }
}
