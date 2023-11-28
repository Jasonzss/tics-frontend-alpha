import { defineStore } from 'pinia'
import { getContentsIntroAPI } from '@/apis/contentAPI.js'
import { ref } from 'vue'

export const useContentsIntroStore = defineStore('contentsIntroStore', ()=>{
    //内容
    const contents = ref([])

    //获取新的内容
   /* async function getContentsIntro(id) {
        let data
        await getContentsIntroAPI(id).then(res => {
            data = JSON.stringfy(res)
        })

        return data
    }*/

    const getContentsIntro = async (id) => {
        const res = await getContentsIntroAPI(id)
        return res
    }

    return {contents, getContentsIntro}
})