import React from "react";
import moduleClasses from "./Stages.module.scss"
import globalClasses from "../../../App.module.scss"
import image from "../../../images/unsplash.png"
import photo from "../../../images/706181.jpg"

export const Stages = () => {
    return (
        <div className={moduleClasses["stages"]}>
            <div className={globalClasses["container"]}>
                <h1 className={moduleClasses["stages__title"]}>Мы работаем в комплексе</h1>
                <p className={moduleClasses["stages__text"]}>чтобы Вы не тратили время на поиск и организацию
                    множества подрядчиков</p>
            </div>
            <div className={moduleClasses["stages__content"]}>
                <img className={moduleClasses["stages__image"]} src={image}/>
                <div className={moduleClasses["stages__stage-one"]}>
                    <div className={moduleClasses["stages__step1"]}>
                        <span className={moduleClasses["stages__span"]}>шаг №1.</span>
                        <h2 className={moduleClasses["stages__subtitle"]}>Подготовительные работы</h2>

                    </div>
                    <p className={moduleClasses["stages__subtext"]}>Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. </p>
                    <div className={moduleClasses["stages__quote-block"]}>
                        <div  className={moduleClasses["stages__block-photo"]}>
                            <img  className={moduleClasses["stages__photo"]} src={photo}/>
                        </div>
                        <div className={moduleClasses["stages__quote"]}>
                            <p className={moduleClasses["stages__quote-text"]}>Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах</p>
                            <p className={moduleClasses["stages__quote-author"]}>
                                <span>Алексей</span>, обследователь и главный инженер проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}