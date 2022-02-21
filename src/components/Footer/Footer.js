import React from "react";
import moduleClasses from "./Footer.module.scss"
import globalClasses from "../../App.module.scss"
import {Contacts} from "../Global/Contacts/Contacts";


export const Footer = () => {
    return (
        <footer className={moduleClasses.footer}>
            <div className={globalClasses.container}>
                <div className={moduleClasses["footer__wrapper"]}>
                    <ul className={`${moduleClasses["footer__wrapper"]} ${moduleClasses["footer__wrapper--list"]}`}>
                        <li className={moduleClasses["footer__link"]}>
                            <Contacts
                                text={"Пишите нам на email"}
                                info={"info@idi.by"}
                                link={"info@idi.by"}
                                textStyle={moduleClasses["footer__text"]}
                                textFeature={moduleClasses["footer__text--link"]}
                            />
                        </li>
                        <li className={moduleClasses["footer__link"]}>
                            <Contacts
                                text={"Есть вопросы? Звоните!"}
                                info={"+375 (29) 456-45-45"}
                                link={"+375 (29) 456-45-45"}
                                textStyle={moduleClasses["footer__text"]}
                                textFeature={moduleClasses["footer__text--link"]}
                            />
                        </li>
                        <li className={moduleClasses["footer__link"]}>
                            <Contacts
                                text={"Заходите в гости"}
                                info={"г. Минск, ул. Ленина, д.9, пом.3, оф.10"}
                                link={"address"}
                                textStyle={moduleClasses["footer__text"]}
                                textFeature={moduleClasses["footer__text--link"]}
                            />
                        </li>
                    </ul>
                    <p className={moduleClasses["footer__text"]}>2016-2019 ООО "Инженерная Диагностика"<br/> Все права
                        защищены.</p>
                </div>
            </div>
        </footer>
    )
}