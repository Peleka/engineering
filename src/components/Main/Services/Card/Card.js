import React from "react";
import moduleClasses from './Card.module.scss'


export const Card = ({photo, title, text, subtext, onClick, itemId}) => {

    return <div className={moduleClasses["card"]}
             role={"button"}
        >
            <img className={moduleClasses["card__image"]} src={photo}/>
            <h2 className={moduleClasses["card__title"]} >{title}</h2>
            <p className={moduleClasses["card__text"]} >{text}</p>
            <span className={moduleClasses["card__subtext"]} >{subtext}</span>
        </div>

}