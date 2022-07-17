import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOff/UncontrolledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(2)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)


    return (
        <div className={"App"}>
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff/>

            {/*<UncontrolledAccordion  titleValue={"Menu"}/>*/}
            <Accordion
                titleValue={"test"}
                collapsed={collapsed}
                onClick={setCollapsed}
            />

            {/*<UncontrolledRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<PageTitle title={"APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}





export default App;
