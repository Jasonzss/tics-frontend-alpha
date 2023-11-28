import httpInstance from "@/utils/http";

//访问id为i的内容引入
export function getContentsIntroAPI(i){
    return httpInstance({
        url: '/contentsIntro/'+i,
    })
}