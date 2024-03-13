<template>
  <!-- will render Default Text -->
  <one-slot-component></one-slot-component>
  <!-- will render Text From Slot -->
  <one-slot-component>Text from slot</one-slot-component>

  <!-- will render multiple slots  -->
  <multiple-slots-component>
    <!-- to pass slot use v-slot:slotName in params -->
    <template v-slot:header>Header Text From Slot</template>
    <!-- shortcut for v-slot -->
    <template #default>Default Text From Slot</template>
    <!-- shortcut for v-slot -->
    <template #footer>Footer Text From Slot</template>
  </multiple-slots-component>

  <!-- passing up text from component -->
  <slots-up-component>
    <template v-slot="slotData">
      <!-- `mySlotVar` prop that written in slots-up-component with data -->
      <!-- perhabs works like this on react 
          <Component>
            (slotData) => {
              return <p>{slotData.mySlotVar}</p>
            }
          </Component>
      -->
      <p>{{ slotData.mySlotVar }}</p>
    </template>
  </slots-up-component>
</template>

<script>
import MultipleSlotsComponent from './MultipleSlotComponent'
import OneSlotComponent from './OneSlotComponent'
import SlotsUpComponent from './SlotsUpComponent'

export default {
  name: 'SlotsComponent',
  components: {
    MultipleSlotsComponent,
    OneSlotComponent,
    SlotsUpComponent,
  }
}
</script>