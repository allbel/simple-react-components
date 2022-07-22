import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const ModeChanging = () => {
    const [on, setOn] = useState<boolean>(false)
    return <UncontrolledOnOff onChange={setOn}/>
}