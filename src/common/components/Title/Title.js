import React from "react";
import moduleClasses from "./Title.module.scss"

export const Title = ({title, modifier}) => {
    return (
        <>
            <h1 className={`${moduleClasses["title"]} ${moduleClasses[modifier]}`}>{title}</h1>
        </>
    )
}