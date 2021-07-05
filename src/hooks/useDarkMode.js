import { useLocalStorage } from './useLocalStorage'
import {useEffect} from 'react'


export function useDarkMode (key) {
    const [someValue, setSomeValue] = useLocalStorage(key, false)

    const body = document.querySelector('body')

    useEffect(()=>{
        if (someValue !== true){
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    },[someValue])

    return [someValue, setSomeValue];
}