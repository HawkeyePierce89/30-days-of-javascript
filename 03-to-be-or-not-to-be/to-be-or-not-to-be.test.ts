import { customExpect } from './to-be-or-not-to-be';

describe('customExpect', () => {
    describe('toBe', () => {
        it('returns true for values that are strictly equal', () => {
            const result = customExpect(5).toBe(5);
            expect(result).toBe(true);
        });

        it('throws an error for values that are not strictly equal', () => {
            expect(() => {
                customExpect(5).toBe(4);
            }).toThrow('Not Equal');
        });
    });

    describe('notToBe', () => {
        it('returns true for values that are not strictly equal', () => {
            const result = customExpect(5).notToBe(4);
            expect(result).toBe(true);
        });

        it('throws an error for values that are strictly equal', () => {
            expect(() => {
                customExpect(5).notToBe(5);
            }).toThrow('Equal');
        });
    });

    describe('edge cases', () => {
        it('correctly handles different types with the same value', () => {
            expect(() => {
                customExpect('5').toBe(5);
            }).toThrow('Not Equal');
            expect(() => {
                customExpect('5').notToBe(5);
            }).not.toThrow();
        });

        it('distinguishes between null and undefined', () => {
            expect(() => {
                customExpect(null).toBe(undefined);
            }).toThrow('Not Equal');
            expect(() => {
                customExpect(undefined).notToBe(null);
            }).not.toThrow();
        });
    });
});
