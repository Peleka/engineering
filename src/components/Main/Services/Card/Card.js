import React from "react";
import moduleClasses from './Card.module.scss'

export const Card = ({photo, title, text}) => {
    return (
        <div className={moduleClasses["card"]}>
            <img className={moduleClasses["card__image"]} src={photo} alt={"photo"}/>
            <h2 className={moduleClasses["card__text"]}>{title}</h2>
            <p className={`${moduleClasses["card__text"]} ${moduleClasses["card__text--small"]}`}>{text}</p>
            <a className={moduleClasses["card__link"]}>Подробнее</a>
        </div>
    )
}