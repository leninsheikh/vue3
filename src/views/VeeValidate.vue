<template>
  <div class="vertical">
      <h2>Individual Field</h2>
      <SimpleInput/>

      <h2>Form</h2>
      <SimpleForm/>
  </div>
</template>

<script>
import SimpleInput from "@/components/vee-validate/SimpleInput";
import SimpleForm from "@/components/vee-validate/SimpleForm";


export default {
    components: { SimpleInput, SimpleForm },

    setup() {

        return {

        };
    }
}
</script>

<style>

</style>

