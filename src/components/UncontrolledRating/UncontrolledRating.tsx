import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";


type UncontrolledRating = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

function UncontrolledRatingSecret(props: UncontrolledRating) {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={ value > 0 } callBack={ () => {setValue(1); props.onChange(1)} }/>
            <Star selected={ value > 1 } callBack={ () => {setValue(2); props.onChange(2)} }/>
            <Star selected={ value > 2 } callBack={ () => {setValue(3); props.onChange(3)} }/>
            <Star selected={ value > 3 } callBack={ () => {setValue(4); props.onChange(4)} }/>
            <Star selected={ value > 4 } callBack={ () => {setValue(5); props.onChange(5)} }/>
        </div>
    )
}

export const UncontrolledRating = React.memo(UncontrolledRatingSecret)

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.callBack}>{ props.selected ?  <b>star</b> : "star"} </span>
}