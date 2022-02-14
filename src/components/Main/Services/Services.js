import React from "react";
import moduleClasses from "./Services.module.scss";
import globalClasses from "../../../App.module.scss";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import {v1} from "uuid";
import {Card} from "./Card/Card";

export const Services = () => {

    const cardsList = [
        {
            id: v1(),
            image: project1,
            title: "Общее обследование",
            text: "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д."
        },
        {
            id: v1(),
            image: project2,
            title: "Тепловизионная съемка",
            text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания"
        },
        {
            id: v1(),
            image: project3,
            title: "Телеинспекция инженерных сетей",
            text: "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров"
        },
        {
            id: v1(),
            image: project2,
            title: "Тахеометрическая съемка",
            text: "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве"
        },
        {
            id: v1(),
            image: project1,
            title: "Общее обследование",
            text: "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д."
        },
        {
            id: v1(),
            image: project2,
            title: "Тепловизионная съемка",
            text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания"
        },
        {
            id: v1(),
            image: project3,
            title: "Телеинспекция инженерных сетей",
            text: "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров"
        },
        {
            id: v1(),
            image: project2,
            title: "Тахеометрическая съемка",
            text: "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве"
        },
        {
            id: v1(),
            image: project1,
            title: "Общее обследование",
            text: "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д."
        },
        {
            id: v1(),
            image: project2,
            title: "Тепловизионная съемка",
            text: "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания"
        },
        {
            id: v1(),
            image: project3,
            title: "Телеинспекция инженерных сетей",
            text: "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров"
        },
        {
            id: v1(),
            image: project2,
            title: "Тахеометрическая съемка",
            text: "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве"
        },
    ]

    return (
        <div className={moduleClasses["services"]}>
            <div className={globalClasses["container"]}>
                <h1 className={moduleClasses["services__title"]}>Услуги</h1>
                <p className={moduleClasses["services__text"]}>Выполняем как комплексное обследование, так и отдельные
                    виды работ</p>
                <div className={moduleClasses["services__wrapper"]}>
                    {cardsList.map(card => (
                        <Card
                            key={card.id}
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
