import React from "react";
import {Connect} from "./Connect/Connect";
import {About} from "./About/About";
import {Services} from "./Services/Services";

export const Main = () => {
    return (
        <>
            <About/>
            <Services/>
            <Connect/>
        </>
    )
}