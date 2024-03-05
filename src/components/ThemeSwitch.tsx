'use client'

import React, {useState, useEffect} from "react";
import {useTheme} from "next-themes";

export default function ThemeSwitch() {
    const [mountend, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() => setMounted(true), []);

    if (!mountend) {
        return null;
    }
    const handleClick = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div onClick={handleClick}
             className="w-[60px] relative h-[30px] cursor-pointer rounded-full bg-[#090D1F] dark:bg-[#fff] rouned-full flex items-center justify-between p-[4px]">
            <div>
                <img src="/images/sun.svg" alt={"sun"} className="w-[20px] h-auto"/>
            </div>
            <div>
                <img src="/images/moon.svg" alt={"sun"} className="w-[20px] h-auto"/>
            </div>
            <div
                className="absolute w-[20px]  transform transition-transform delay-150 h-[20px] bg-[#fff] dark:bg-[#090D1F] rounded-full"
                style={resolvedTheme === 'dark' ? {left: "4px"} : {right: "4px"}}/>
        </div>
    )
}

