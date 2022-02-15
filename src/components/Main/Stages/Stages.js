import React from "react";
import moduleClasses from "./Stages.module.scss"
import globalClasses from "../../../App.module.scss"
import image from "./images/stage_bgr.png"
import {Stage} from "./Stage/Stage";

export const Stages = () => {
    return (
        <div className={moduleClasses["stages"]}>
            <div className={globalClasses["container"]}>
                <h1 className={moduleClasses["stages__title"]}>Мы работаем в комплексе</h1>
                <p className={moduleClasses["stages__text"]}>чтобы Вы не тратили время на поиск и организацию<br/>
                    множества подрядчиков</p>
            </div>
            <div className={`${moduleClasses["stages__wrapper"]} ${moduleClasses["stages__wrapper--background"]}`}>
                <img className={moduleClasses["stages__image"]} src={image} alt={"image"}/>
                <Stage/>
            </div>
        </div>
    )
}