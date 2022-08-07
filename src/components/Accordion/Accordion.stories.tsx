import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} onClick={onClickCallback} items={[]} />
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} onClick={onClickCallback}
                                                     items={[{title: 'one', value: 1}, {title: 'two', value: 2}, {title: 'three', value: 3}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'one', value: 1}, {title: 'two', value: 2}, {title: 'three', value: 3}]}
                      onClick={(id) => {alert(`user with ID ${id} should be happy`)}}/>
}