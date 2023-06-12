export default class Queue {
  constructor() {
    this.entities = [];
  }

  enqueue(value) {
    return this.entities.push(value);
  }

  dequeue() {
    return this.entities.shift();
  }

  getLength() {
    return this.entities.length;
  }

  isEmpty() {
    return this.entities.length === 0 ? true : false;
  }

  getEntities() {
    return this.entities;
  }

  getRear() {
    return this.entities[Array(this.entities).length];
  }

  getFront() {
    return this.entities[0];
  }
}
