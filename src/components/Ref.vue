<template>
  <div>
      <h2>count: {{count}}</h2>
      <button @click="handleClick">click</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
    setup() {
        const count = ref(0);
        const handleClick = () => {
            /**
             * ref() return a reactive object which contain reactive value.
             */
            count.value++;
            console.log("COUNT", count);
            console.log("COUNT", count.value);
        }
        return {count, handleClick}
    }
}
</script>

<style>

</style>
