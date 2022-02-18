import React from "react";
import moduleClasses from "./Header.module.scss"
import logo from "./../../images/logo.svg"

export const Header = () => {
    return (
        <header className={moduleClasses["header"]}>
            <img className={moduleClasses["header__logo"]} src={logo} alt={"logo"}/>
            <div className={moduleClasses["header__wrapper"]}>
                <div>
                    <p className={moduleClasses["header__text"]}>Пишите нам на email</p>
                    <a className={`${moduleClasses["header__text"]} ${moduleClasses["header__text--yellow"]}`} href={'info@diagnistics.by'}>info@diagnistics.by</a>
                </div>
                <div className={moduleClasses["header__tel"]}>
                    <p className={moduleClasses["header__text"]}>Есть вопросы? Звоните!</p>
                    <a  className={`${moduleClasses["header__text"]} ${moduleClasses["header__text--big"]}`} href={'+375 (29) 456-45-45'}>+375 (29) 456-45-45</a>
                </div>
            </div>
        </header>
    )
}