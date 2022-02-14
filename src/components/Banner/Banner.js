import React from "react";
import moduleClasses from './Banner.module.scss'
import globalClasses from "../../App.module.scss"
import man from "./image/man.jpg"
import {Header} from "../Header/Header";
import {Button} from "../Global/Button/Button";
import {Steps} from "./List/Steps";

export const Banner = () => {
    return (
        <div className={moduleClasses["banner"]}>
            <div className={globalClasses["container"]}>
                <Header/>
                <div className={`${moduleClasses["banner__wrapper"]} ${moduleClasses["banner__wrapper--margin"]}`}>
                    <div>
                        <h1 className={moduleClasses["banner__title"]}>Независимое обследование <br/>зданий и сооружений</h1>
                        <p className={moduleClasses["banner__text"]}>антенн, труб, теплосетей, канализаций<br/>и других объектов строительства</p>
                    </div>
                    <div className={moduleClasses["banner__wrapper-text"]}>
                        <Button textButton={"получить коммерческое"}/>
                        <p className={`${moduleClasses["banner__text"]} ${moduleClasses["banner__text--small"]}`}>
                            Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер
                        </p>
                    </div>
                </div>
                <div className={moduleClasses["banner__wrapper"]}>
                    <Steps/>
                    <div className={moduleClasses["banner__video"]}>
                        <img className={moduleClasses["banner__photo"]} src={man} alt={"man"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}