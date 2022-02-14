import React from "react";
import moduleClasses from './Banner.module.scss'
import globalClasses from "../../App.module.scss"
import {Button} from "../../common/components/Button/Button";
import photo from "../../images/706181.jpg"
import one from "../../images/01.svg"
import two from "../../images/02.svg"
import three from "../../images/03.svg"
import stamp from "./image/stamp.svg"
import {Header} from "../Header/Header";


export const Banner = () => {

    return (
        <div className={moduleClasses["banner"]}>
            <div className={globalClasses["container"]}>
                <Header/>
                <div className={moduleClasses["banner__wrapper"]}>
                    <div className={moduleClasses["banner__block-text"]}>
                        <h1>Независимое обследование
                            зданий и сооружений</h1>
                        <p className={moduleClasses["banner__text"]}>антенн, труб, теплосетей, канализаций
                            и других объектов строительства</p>
                    </div>
                    <div>
                        <Button textButton={"получить коммерческое"}/>
                        <p className={`${moduleClasses["banner__text"]} ${moduleClasses["banner__text--small"]}`}>Отправьте
                            техзадание и получите коммерческое предложение в течении 15 минут на свой email или в
                            мессенджер</p>
                    </div>
                </div>
                <div className={`${moduleClasses["banner__wrapper"]} ${moduleClasses["banner__wrapper--end"]}`}>
                    <ul className={moduleClasses["banner__steps"]}>
                        <li className={moduleClasses["banner__item"]}>
                            <img  className={moduleClasses["banner__image"]} src={one}/>
                            <p>Начинаем работать без аванса</p>
                        </li>
                        <li className={moduleClasses["banner__item"]}>
                            <img  className={moduleClasses["banner__image"]} src={two}/>
                            <p>Предоставляем отсрочку платежа</p>
                        </li>
                        <li  className={moduleClasses["banner__item"]}>
                            <img  className={moduleClasses["banner__image"]} src={three}/>
                            <p>Всегда называем справедливую цену</p>
                        </li>
                    </ul>
                </div>
                <div className={moduleClasses["banner__video"]}>
                    <img className={moduleClasses["banner__photo-men"]} src={photo}/>
                </div>
            </div>
        </div>
    )
}