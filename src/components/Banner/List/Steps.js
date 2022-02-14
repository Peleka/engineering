import React from "react";
import moduleClasses from './Steps.module.scss'
import step01 from "../image/number1.svg"
import step02 from "../image/number2.svg"
import step03 from "../image/number3.svg"

export const Steps = () => {
    return (
        <ul className={moduleClasses["steps"]}>
            <li className={moduleClasses["steps__item"]}>
                <img className={moduleClasses["steps__image"]} src={step01} alt={"number"}/>
                <p className={moduleClasses["steps__text"]}>Начинаем работать без аванса</p>
            </li>
            <li className={moduleClasses["steps__item"]}>
                <img className={moduleClasses["steps__image"]} src={step02} alt={"number"}/>
                <p className={moduleClasses["steps__text"]}>Предоставляем отсрочку платежа</p>
            </li>
            <li className={moduleClasses["steps__item"]}>
                <img className={moduleClasses["steps__image"]} src={step03} alt={"number"}/>
                <p className={moduleClasses["steps__text"]}>Всегда называем справедливую цену</p>
            </li>
        </ul>
    )
}