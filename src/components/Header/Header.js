import React from "react";
import moduleClasses from "./Header.module.scss"
import logo from "./../../images/logo.svg"
import {Contacts} from "../Global/Contacts/Contacts";

export const Header = () => {
    return (
        <header className={moduleClasses["header"]}>
            <img className={moduleClasses["header__logo"]} src={logo} alt={"logo"}/>
            <div className={moduleClasses["header__wrapper"]}>
                <div>
                    <Contacts
                        text={"Пишите нам на email"}
                        info={"info@diagnistics.by"}
                        link={"info@diagnistics.by"}
                        textStyle={moduleClasses["header__text"]}
                        textFeature={moduleClasses["header__text--yellow"]}
                    />
                </div>
                <div className={moduleClasses["header__tel"]}>
                    <Contacts
                        text={"Есть вопросы? Звоните!"}
                        info={"+375 (29) 456-45-45"}
                        link={"+375 (29) 456-45-45"}
                        textStyle={moduleClasses["header__text"]}
                        textFeature={moduleClasses["header__text--big"]}
                    />
                </div>
            </div>
        </header>
    )
}