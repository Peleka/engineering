import React from "react";
import moduleClasses from './Services.module.scss'
import globalClasses from "../../../App.module.scss";
import project_photo from "../../../images/proekt_doma.png"
import {v1} from "uuid";
import {Card} from "./Card/Card";
import HorizontalScroll from "react-scroll-horizontal";

export const Services = () => {
    const cardsList = [
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
        {id: v1(), image: project_photo, title: "Общее обследование", text: "Общее обследование", subtext: "Подробнее"},
    ]

    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}

    return (
        <div className={moduleClasses["services"]}>
            <div className={globalClasses["container"]}>
                <div className={moduleClasses["services__content"]}>
                    <h1 className={moduleClasses["services__title"]}>Услуги</h1>
                    <p className={moduleClasses["services__text"]}>Выполняем как комплексное обследование, так и отдельные виды работ</p>
                </div>
              <div className={moduleClasses["services__cards"]}>
                    <HorizontalScroll>
                        {cardsList.map(card =>(
                            <Card
                                key={card.id}
                                itemId={card.id}
                                title={card.title}
                                text={card.text}
                                photo={card.image}
                                subtext={card.subtext}
                            />
                        ))}
                    </HorizontalScroll>
                </div>
            </div>
        </div>
    )
}

function onWheel(apiObj, ev){
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}