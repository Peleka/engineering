import React from "react";
import moduleClasses from './Banner.module.scss'
import globalClasses from "../../App.module.scss"
import {Button} from "../../common/components/Button/Button";
import photo from "../../images/706181.jpg"
import one from "../../images/01 (Stroke).svg"
import two from "../../images/02 (Stroke).svg"
import three from "../../images/03 (Stroke).svg"
import {Header} from "../Header/Header";

export const Banner = () => {

    return (
        <div className={moduleClasses["banner"]}>
            <div className={globalClasses["container"]}>
                <Header/>
                <div className={moduleClasses["banner__content"]}>

                    <div>
                        <h1 className={moduleClasses["banner__title"]}>Независимое обследование
                            зданий и сооружений</h1>
                        <p className={moduleClasses["banner__text"]}>антенн, труб, теплосетей, канализаций
                            и других объектов строительства</p>
                    </div>
                    <div>
                        <Button textButton={"получить коммерческое"}/>
                        <p className={moduleClasses["banner__text"]}>Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер</p>
                    </div>
                    <div>
                        <img src={one}/>
                        <span>Начинаем работать без аванса</span>
                        <img src={two}/>
                        <span>Предоставляем отсрочку платежа</span>
                        <img src={three}/>
                        <span>Всегда называем справедливую цену</span>
                    </div>
                    <img className={moduleClasses["banner__photo-men"]} src={photo}/>
                </div>
            </div>
        </div>
    )
}