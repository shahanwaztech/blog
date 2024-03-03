'use client'

import {useState,useEffect} from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch (){
    const [mountend, setMounted]= useState(false);
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() =>  setMounted(true), []);

    if(!mountend){
        <h1>Do</h1>
    }

    if(resolvedTheme === 'dark'){
        return<h1 onClick={() => setTheme('light')} className="cursor-pointer">Light</h1>
    }
    if(resolvedTheme === 'light'){
        return<h1 onClick={() => setTheme('dark')} className="cursor-pointer">dark</h1>
    }
}

