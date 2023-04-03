import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Testing useCounter custom hook', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
    test('should return counter = 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });
    test('should increment the counter', () => {
        const { result } = renderHook(() => useCounter(10));
        const { counter, increment } = result.current;
        act(() => {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(13);
    });
    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(10));
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(7);
    });
    test('should reset the counter', () => {
        const { result } = renderHook(() => useCounter(10));
        const { counter, increment, reset } = result.current;
        act(() => {
            increment();
            increment(2);
            reset();
        });
        expect(result.current.counter).toBe(10);
    });
})