<template>
  <div>
    <p>
      <slot v-bind:mySlotVar='componentVar'></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SlotsUpComponent',
  data() {
    return {
      componentVar: 'Text passed up from component'
    }
  },
}
</script>