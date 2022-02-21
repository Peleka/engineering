import React from "react";


export const Contacts = ({textStyle, textFeature, link, text, info}) => {
    return (
        <>
            <p className={textStyle}>{text}</p>
            <a className={`${textStyle} ${textFeature}`}
               href={link}>{info}</a>
        </>
    )
}