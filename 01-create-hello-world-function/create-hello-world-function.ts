/**
 * Creates a function that returns the string "Hello World".
 *
 * This factory function returns a new function that, when called,
 * ignores any passed arguments and simply returns the "Hello World" string.
 * It's a demonstration of closure and function generation in JavaScript/TypeScript.
 *
 * @returns {Function} A function that takes any number of arguments (of any type)
 * and returns the string "Hello World".
 */
export function createHelloWorld() {
    return function(...args: unknown[]): string {
        void args;
        return "Hello World";
    };
}
