<template>
  <div class="vertical">
      <Ref />
      <Lifecycle />
  </div>
</template>

<script>
import Ref from '@/components/compostion-syntax/Ref'
import Lifecycle from '@/components/compostion-syntax/Lifecycle'

export default {
    components: {Ref, Lifecycle},
    setup() {

    }
}
</script>

<style>

</style>
