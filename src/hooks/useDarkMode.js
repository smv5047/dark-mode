import { useLocalStorage } from './useLocalStorage'
import React, {useEffect} from 'react'

const body = document.querySelector('.body')
const toggle = document.querySelector('.toggle')

export function useDarkMode () {
    const [someValue, setSomeValue] = useLocalStorage(true)

    useEffect(()=>{
        if (useLocalStorage === true){
            body.classList.add('.dark-mode')
        } else {
            body.classList.remove('.dark-mode')
        }
    },[someValue])

    // const setValue = (value) =>{

    //     setSomeValue(value)
    // }

    return [someValue, setSomeValue];
}