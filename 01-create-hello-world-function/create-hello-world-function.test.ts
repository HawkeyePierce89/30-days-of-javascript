import { createHelloWorld } from './create-hello-world-function';

describe('createHelloWorld', () => {
    it('should return a function', () => {
        const result = createHelloWorld();
        expect(typeof result).toBe('function');
    });

    it('returned function should return "Hello World" when called', () => {
        const helloWorldFn = createHelloWorld();
        expect(helloWorldFn()).toBe('Hello World');
    });

    it('returned function should ignore passed arguments', () => {
        const helloWorldFn = createHelloWorld();
        expect(helloWorldFn(1, 'string', true, null, undefined)).toBe('Hello World');
    });
});
