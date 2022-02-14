import React from "react";
import moduleClasses from "./Button.module.scss"

export const Button = ({textButton}) => {
    return (
        <>
            <button className={moduleClasses["button"]}>
                {textButton}
            </button>
        </>
    )
}