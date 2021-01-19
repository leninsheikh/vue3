<template>
  <div class="vertical">
      <input v-model="value" type="text" />
      <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
import {useField} from "vee-validate";
import { string } from 'yup'

export default {
    setup() {
        const { errorMessage, value } = useField('name', string().required().min(8));

        return {
            value,
            errorMessage,
        };
    }
}
</script>

<style>

</style>

