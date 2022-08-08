import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type UncontrolledAccordion = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordion) {

    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                callback={ () => dispatch({type: TOGGLE_COLLAPSED}) }
            />
            {!state.collapsed && <AccordionBody/> }
        </div>
    )
}


type AccordionTitle = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitle) {
    return <h3 onClick={props.callback}>-- {props.title} --</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}