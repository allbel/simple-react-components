import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    })

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}