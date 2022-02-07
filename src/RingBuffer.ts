/**
 * Implement a class named ring buffer with fixed capacity such that
 *
 * constructor: takes the capacity for the ring buffer
 *
 * push: adds a value to the ring buffer.
 * pop: removes the last value from the ring buffer or undefined if it's empty.
 * peek: returns the current value of the most recent value added or undefined if none have been added
 *
 * If we have too many values (exceeding capacity) the oldest values are lost.
 *
 * The ordering of the push operations must be kept.
 */
export class RingBuffer<T> {
    #buffer = [] as T[]
    #bufferLength = 0
    
    constructor(capacity: number) {
        this.#bufferLength = capacity
    }

    public push(value: T) {
        if (this.#buffer.length === this.#bufferLength) {
            this.#buffer.shift()
            this.#buffer.push(value as T)
        } else {
            this.#buffer.push(value as T)
        }
    }

    public peek(): T | undefined {
        if (!this.#buffer.length) {
            return undefined;
        }
        return this.#buffer[this.#buffer.length - 1]
    }

    public pop(): T | undefined {
        if (!this.#buffer.length) {
            return undefined;
        }
        return this.#buffer.pop()
    }

}
