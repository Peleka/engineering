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
                <di>
                    <img className={moduleClasses["stages__image"]} src={image}/>
                    <div className={moduleClasses["stages__stage-one"]}>
                        <div className={moduleClasses["stages__step1"]}>шаг №1. </div>
                        <h2 className={moduleClasses["stages__subtitle"]}>Подготовительные работы</h2>
                        <p className={moduleClasses["stages__subtext"]}>Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. </p>
                        <div>
                            <img  className={moduleClasses["stages__photo"]} src={photo}/>
                            <p className={moduleClasses["stages__quote"]}>“Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“</p>
                            <p>Алексей, обследователь и главный инженер проектов</p>
                        </div>
                    </div>
                </di>
            </div>
        </div>
    )
}