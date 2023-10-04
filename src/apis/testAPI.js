import httpInstance from "@/utils/http";

export function translate(){
    return httpInstance({
        url: 'translation/result?word=a&lang=en'
    })
}