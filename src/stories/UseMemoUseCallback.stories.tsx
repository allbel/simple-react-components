import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


type UsersType = {
    users: Array<string>
}

const UsersSecret = (props: UsersType) => {
    console.log('USERS')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    console.log('HelpsToReactMemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Name1", "Name2", "Name3", 'Dimych'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


type BooksType = {
    // books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
        </div>
    )
}

const Book = React.memo(BooksSecret)

export const LikeUseCallback = () => {

    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", 'HTML'])

    const memoAddBook = useCallback( () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoAddBook}/>
    </>
}