<template>
<div></div>
</template>

<script>
import { onMounted, onBeforeMount } from 'vue';
export default {
    name: "Lifecycle",
    mounted() {
        console.log("Lifecycle:Option: Mounted")
    },
    setup() {

        onMounted(() => {
            console.log("Lifecycle:Composition: Mounted")
        })
        onBeforeMount(() => console.log('Lifecycle:Composition: Before Mounted'))
    }
}
</script>

<style scoped>

</style>
