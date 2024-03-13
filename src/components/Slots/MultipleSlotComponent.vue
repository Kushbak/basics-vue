<template>
  <!-- slot is like children in react, but u can set multiple named slots in one component -->
  <div>
    <p>Slot Default = <slot>Default Text</slot>
    </p>
    <p>Slot Header = <slot name='header'>Default Text</slot>
    </p>
    <p>Slot Footer = <slot name='footer'>Default Text</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MultipleSlotsComponent',
}
</script>