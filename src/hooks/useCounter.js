import { useState } from "react"


export const useCounter = (initialValue = 10, minimalValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter === minimalValue) return
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}