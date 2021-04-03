import {ref } from "vue"
const useTags = (posts) =>{
    const tags = ref([])
    const tagset = new Set()
    posts.forEach(item => {
        item.tags.forEach(tag => tagset.add(tag))
    });
    tags.value = [...tagset]
    return {tags}
}
export default useTags