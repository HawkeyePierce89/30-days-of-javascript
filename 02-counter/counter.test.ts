import { createCounter } from './counter';

describe('createCounter', () => {
    it('initializes counter with given value', () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10); // The first call should return the initial value
    });

    it('increments counter on each call', () => {
        const counter = createCounter(5);
        counter(); // 5
        expect(counter()).toBe(6); // Next call should return 6
        expect(counter()).toBe(7); // Then 7
    });

    it('maintains separate state for different counters', () => {
        const counter1 = createCounter(1);
        const counter2 = createCounter(10);

        // Incrementing counter1 does not affect counter2
        counter1();
        expect(counter1()).toBe(2); // counter1 is now 2
        expect(counter2()).toBe(10); // counter2 is still 10
    });

    it('correctly increments counter from negative values', () => {
        const counter = createCounter(-3);
        expect(counter()).toBe(-3); // Starts at -3
        expect(counter()).toBe(-2); // Then -2
        expect(counter()).toBe(-1); // and -1
    });
});
