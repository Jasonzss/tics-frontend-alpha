import axios from "axios"
import { defineStore } from 'pinia'
import { ref } from "vue";


var url = '/recommend'

const res = await axios.get(url)

export const useRecommandIdsStore = defineStore('recommandIds', ()=>{
    const ids = ref(res)
    return { ids }
})