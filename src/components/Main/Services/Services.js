import React from "react";
import moduleClasses from './Services.module.scss'
import globalClasses from "../../../App.module.scss";
import project1 from "../../../images/proekt_doma.png"
import project2 from "../../../images/photo.png"
import project3 from "../../../images/photo (1).png"
import project4 from "../../../images/04.png"
import {v1} from "uuid";
import {Card} from "./Card/Card";

export const Services = () => {
    const text1 = "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности" +
        "и т.д."
    const text2 = "Исследование системы отопления, вентиляции" +
        "и кондиционирования, а также оценка энергоэффективности здания"
    const text3 = "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов" +
        "до 250 метров"
    const text4 = "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве"

    const cardsList = [
        {id: v1(), image: project1, title: "Общее обследование", text: text1},
        {id: v1(), image: project2, title: "Тепловизионная съемка", text: text2},
        {id: v1(), image: project3, title: "Телеинспекция инженерных сетей", text: text3},
        {id: v1(), image: project4, title: "Тахеометрическая съемка", text: text4},
        {id: v1(), image: project1, title: "Общее обследование", text: text1},
        {id: v1(), image: project2, title: "Тепловизионная съемка", text: text2},
        {id: v1(), image: project3, title: "Телеинспекция инженерных сетей", text: text3},
        {id: v1(), image: project4, title: "Тахеометрическая съемка", text: text4},
        {id: v1(), image: project1, title: "Общее обследование", text: text1},
        {id: v1(), image: project2, title: "Тепловизионная съемка", text: text2},
        {id: v1(), image: project3, title: "Телеинспекция инженерных сетей", text: text3},
        {id: v1(), image: project4, title: "Тахеометрическая съемка", text: text4},
    ]

    return (
        <div className={moduleClasses["services"]}>
            <div className={globalClasses["container"]}>
                <h1 className={moduleClasses["services__title"]}>Услуги</h1>
                <p className={moduleClasses["services__text"]}>Выполняем как комплексное обследование, так и отдельные
                    виды работ</p>
                <div className={moduleClasses["services__cards"]}>
                    {cardsList.map(card => (
                        <Card
                            key={card.id}
                            itemId={card.id}
                            title={card.title}
                            text={card.text}
                            photo={card.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function onWheel(apiObj, ev) {
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