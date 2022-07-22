import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onClick={setValue}/>
}