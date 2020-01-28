<template>
  <b-toast id="my-toast" :variant=variant :autoHideDelay="5000" solid>
    <template v-slot:toast-title>
      <div class="d-flex flex-grow-1 align-items-baseline">
        <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
        <strong class="mr-auto">Notice!</strong>
        <small class="text-muted mr-2">42 seconds ago</small>
      </div>
    </template>
    {{message}}
  </b-toast>
</template>

<script>
export default {
  name: 'Toast',
  props: ['message', 'variant']
}
</script>

<style scoped>

</style>
