<template>
<div class="post">
  <h2> {{cpost.id}} ---> {{snipper}} </h2>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['cpost'],
    setup(props) {
        const snipper = computed(()=>{
            return props.cpost.body.substring(0,3) + "....."
        })
        return {snipper}
    }

}
</script>

<style>

</style>