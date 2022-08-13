import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionSecret(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={ () => props.onChange(!props.collapsed) }
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    )
}

export const Accordion = React.memo(AccordionSecret)

type AccordionTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitle) {
    return <h3 onClick={props.onClick}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => { props.onClick(i.value) }} key={index}>{i.title}</li>)}
        </ul>
    )
}