class Heap {
  constructor(heapComparer) {
    this.heap = [];
    this.heapComparer = heapComparer;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  top() {
    if(!this.heap.length) {
      return null;
    }

    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return top;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heapComparer(this.heap[index], this.heap[parentIndex])) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestChildIndex = index;

      if (leftChildIndex < this.heap.length && this.heapComparer(this.heap[leftChildIndex], this.heap[smallestChildIndex])) {
        smallestChildIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heapComparer(this.heap[rightChildIndex], this.heap[smallestChildIndex])) {
        smallestChildIndex = rightChildIndex;
      }

      if (index !== smallestChildIndex) {
        [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]];
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }
}

export default Heap;