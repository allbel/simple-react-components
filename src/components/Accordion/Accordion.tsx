import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={ () => props.onClick(!props.collapsed) }
            />
            {!props.collapsed && <AccordionBody/> }
        </div>
    )
}


type AccordionTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitle) {
    return <h3 onClick={props.onClick}>-- {props.title} --</h3>
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

export default Accordion;