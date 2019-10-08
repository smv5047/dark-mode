import { useLocalStorage } from './useLocalStorage'
import React, {useEffect} from 'react'

const body = document.querySelector('.body')
const toggle = document.querySelector('.toggle')

export function useDarkMode (enabled) {
    const [someValue, setSomeValue] = useLocalStorage(enabled)

    useEffect(()=>{
        if (useLocalStorage === true){
            body.classList.add('.dark-mode')
        } else {
            body.classList.remove('.dark-mode')
        }
    },[toggle])

    const setValue = (value) =>{

        setSomeValue(value)
    }

    return [];
}