import React from "react";
import globalClasses from "../../../App.module.scss";
import moduleClasses from "./About.module.scss";
import picture from "./images/picture.png";

export const About = () => {
    return (
        <div className={globalClasses["container"]}>
            <div className={moduleClasses["about"]}>
                <div className={moduleClasses["about__content"]}>
                    <h1 className={moduleClasses["about__title"]}>Мы работаем быстро<br/>
                        и наши отчеты проходят согласование с первого раза</h1>
                    <p className={moduleClasses["about__text"]}>Над вашим объектом работает целая команда:<br/>
                        3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для камеральных работ</p>
                </div>
                <img className={moduleClasses["about__image"]} src={picture} alt={"picture"}/>
                <ul className={moduleClasses["about__list"]}>
                    <li className={`${moduleClasses["about__title"]} ${moduleClasses["about__title--small"]}`}> Вы и Ваши архитекторы получаете: </li>
                    <li className={moduleClasses["about__item"]}>Отчет на который на 100% можно положиться</li>
                    <li className={moduleClasses["about__item"]}>Экономию времени и прогнозируемость сроков</li>
                    <li className={moduleClasses["about__item"]}>Предварительные результаты сразу на месте</li>
                </ul>
            </div>
        </div>
    )
}
