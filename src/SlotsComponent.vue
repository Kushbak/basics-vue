<template>
  <!-- will render Default Text -->
  <my-component-one-slot></my-component-one-slot>
  <!-- will render Text From Slot -->
  <my-component-one-slot>Text from slot</my-component-one-slot>

  <!-- will render multiple slots  -->
  <my-component-multiple-slots>
    <!-- to pass slot use v-slot:slotName in params -->
    <template v-slot:header>Header Text From Slot</template>
    <!-- shortcut for v-slot -->
    <template #default>Default Text From Slot</template>
    <!-- shortcut for v-slot -->
    <template #footer>Footer Text From Slot</template>
  </my-component-multiple-slots>

  <!-- passing up text from component -->
  <my-component-slot-up>
    <template v-slot="slotData">
      <!-- `mySlotVar` prop that written in my-component-slot-up with data -->
      <!-- perhabs works like this on react 
          <Component>
            (slotData) => {
              return <p>{slotData.mySlotVar}</p>
            }
          </Component>
      -->
      <p>{{ slotData.mySlotVar }}</p>
    </template>
  </my-component-slot-up>
</template>

<script>
import { createApp } from 'vue'
const slots = createApp({})
slots.component('myComponentOneSlot', {
  // slot is like children in react, but u can set multiple named slots in one component
  template: `<div>
        <p>Slot Default <slot>Default Text</slot></p>
      </div>`
})
slots.component('myComponentMultipleSlots', {
  // slot is like children in react, but u can set multiple named slots in one component
  template: `<div>
        <p>Slot Default = <slot>Default Text</slot></p>
        <p>Slot Header = <slot name='header'>Default Text</slot></p>
        <p>Slot Footer = <slot name='footer'>Default Text</slot></p>
      </div>`
})
slots.component('myComponentSlotUp', {
  data() {
    return {
      componentVar: 'Text passed up from component'
    }
  },
  template: `<div>
        <p><slot v-bind:mySlotVar='componentVar'></slot></p>
      </div>
    `
})
</script>