import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 4983950594
}

export const Example1 = () => {
    console.log('Example1')

    // const initValue = generateData()

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}