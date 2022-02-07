import React from "react";
import globalClasses from "../../App.module.scss"
import moduleClasses from "./Header.module.scss"
import logo from "./../../images/logo.svg"

export const Header = () => {
    return (
        <header className={moduleClasses["header"]}>
            <div className={globalClasses["container"]}>
                <div className={`${moduleClasses["header__wrapper"]}`}>
                    <img className={moduleClasses["header__logo"]} src={logo} alt={"logo"}/>
                    <div className={moduleClasses["header__contacts"]}>
                        <div>
                            <span>Пишите нам на email</span>
                            <a href={'info@diagnistics.by'}>info@diagnistics.by</a>
                        </div>
                        <div>
                            <span>Есть вопросы? Звоните!</span>
                            <a href={'+375 (29) 456-45-45'}>+375 (29) 456-45-45</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}