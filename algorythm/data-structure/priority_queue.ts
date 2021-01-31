class Item<T> {
  priority: number;
  value: T;

  constructor(priority: number, value: T) {
    this.priority = priority;
    this.value = value;
  }
}

interface PriorityQueue<T> {
  insert(item: Item<T>): void;
  peek(): Item<T>;
  pop(): Item<T>;
  size(): number;
  isEmpty(): boolean;
}

//PriorityQueue with array
//insert() || pop() O(N)
class PriorityQueueWithArr<T> implements PriorityQueue<T> {
  private data: Item<T>[];

  constructor() {
    this.data = [];
  }

  insert(item: Item<T>) {
    if (this.data.length === 0) {
      this.data.push(item);
      return;
    }

    for (let i = 0; i < this.data.length; i++) {
      if (i == this.data.length - 1) {
        this.data.push(item);
        return;
      }

      if (this.data[i].priority > item.priority) {
        this.data.splice(i, 0, item);
        return;
      }
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    return this.data.length === 0 ? null : this.data[0];
  }

  pop() {
    return this.data.length === 0 ? null : this.data.pop();
  }

  size() {
    return this.data.length;
  }
}

//PriorityQueue with heap
//insert() && pop() O(logN)
export class PriorityQueueWithHeap<T> implements PriorityQueue<T> {
  private heap: Item<T>[];

  constructor() {
    this.heap = [];
  }

  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(item: Item<T>) {
    this.heap.push(item);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent].priority < this.heap[i].priority) break;
      this.swap(i, parent);
      i = parent;
    }
  }

  pop() {
    if (this.heap.length == 0) return null;

    this.swap(0, this.heap.length - 1);
    const item = this.heap.pop();

    let current = 0;
    while (2 * current + 1 < this.heap.length) {
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      const next =
        right < this.heap.length &&
        this.heap[right].priority < this.heap[left].priority
          ? right
          : left;

      if (this.heap[next].priority > this.heap[current].priority) break;
      this.swap(current, next);
      current = next;
    }

    return item;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
