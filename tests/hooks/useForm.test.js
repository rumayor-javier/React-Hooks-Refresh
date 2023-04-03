import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Testing useForm custom hook', () => {

    const initialForm = {
        name: 'Rudolph',
        email: 'rudolph@google.com',
    };

    const event = {
        target: {
            name: 'name',
            value: 'Rudolph the red nose reindeer',
        },
    };

    test('should return a default values form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: { name: initialForm.name, email: initialForm.email },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });
    test('should return an updated value on name form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => onInputChange(event));
        expect(result.current.name).toBe(event.target.value);
        expect(result.current.formState.name).toBe(event.target.value);
    });
    test('should return the initial state form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange(event);
            onResetForm();
        });
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: { name: initialForm.name, email: initialForm.email },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });
});