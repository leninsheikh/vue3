<template>
  <div style="display: flex; flex-direction: column">
      <Ref />
      <Lifecycle />
  </div>
</template>

<script>
import Ref from '@/components/Ref'
import Lifecycle from '@/components/Lifecycle'

export default {
    components: {Ref, Lifecycle},
    setup() {

    }
}
</script>

<style>

</style>
