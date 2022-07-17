import React, {useState} from 'react';


type UncontrolledAccordion = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: UncontrolledAccordion) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                callback={ () => setCollapsed(!collapsed) }
            />
            {!collapsed && <AccordionBody/> }
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

export default UncontrolledAccordion;