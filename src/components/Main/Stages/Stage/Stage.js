import React from "react";
import moduleClasses from "./Stage.module.scss"
import man from "../images/man.jpg"

export const Stage = () => {
    return (
        <div className={moduleClasses["stage"]}>
            <div className={moduleClasses["stage__wrapper"]}>
                <span className={moduleClasses["stage__number"]}>шаг №1.</span>
                <h2 className={moduleClasses["stage__title"]}>Подготовительные работы</h2>
            </div>
            <p className={moduleClasses["stage__text"]}>Мы осматриваем здание, делаем замеры и проверяем наличие
                визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д. </p>
            <div className={moduleClasses["stage__wrapper"]}>
                <img className={moduleClasses["stage__photo"]} src={man} alt={"man"}/>
                <div>
                    <p className={`${moduleClasses["stage__quote"]} ${moduleClasses["stage__quote--italic"]}`}>Задача
                        этого этапа получить максимально полное
                        представление о конструкции здания, условиях его эксплуатации и возможных слабых местах</p>
                    <p className={moduleClasses["stage__quote"]}>АЛЕКСЕЙ, обследователь и главный инженер проектов</p>
                </div>
            </div>
        </div>
    )
}