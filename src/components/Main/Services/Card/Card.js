import React from "react";
import moduleClasses from './Card.module.scss'


export const Card = ({photo, title, text}) => {

    return (
        <div className={moduleClasses["card"]}>
            <div className={moduleClasses["card__image"]}>
                <img src={photo}/>
            </div>

            <h2 className={moduleClasses["card__title"]}>{title}</h2>
            <p className={moduleClasses["card__text"]}>{text}</p>
            <span className={moduleClasses["card__subtext"]}>Подробнее</span>
        </div>
    )
}