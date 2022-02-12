import React from "react";
import globalClasses from "../../../App.module.scss"
import moduleClasses from "./About.module.scss"
import tv from "../../../images/tv.png"


export const About = () => {
    return (
        <div className={globalClasses["container"]}>
            <div className={moduleClasses["sectionAbout"]}>
                <div className={moduleClasses["sectionAbout__description"]}>
                    <h1 className={moduleClasses["sectionAbout__title"]}>Мы работаем быстро
                        и наши отчеты проходят согласование с первого раза</h1>
                    <p>Над вашим объектом работает целая команда:
                        3 ГИПа (главных инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника для
                        камеральных работ</p>
                </div>
                <img className={moduleClasses["sectionAbout__image"]} src={tv} alt={"tv"}/>
                <ul className={moduleClasses["sectionAbout__advantages"]}>
                    Вы и Ваши архитекторы получаете:
                    <li className={moduleClasses["sectionAbout__item"]}>Отчет на который на 100% можно положиться </li>
                    <li className={moduleClasses["sectionAbout__item"]}>Экономию времени и прогнозируемость сроков</li>
                    <li className={moduleClasses["sectionAbout__item"]}>Предварительные результаты сразу на месте</li>
                </ul>
            </div>

        </div>
    )
}
