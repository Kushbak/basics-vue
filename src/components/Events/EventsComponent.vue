<template>
  <!-- $event is the second param of $emit inside btn-text component -->
  <!-- in this case $event = sentence -->
  <btn-text @my-event="displayText += $event" label="Sentence"></btn-text>
  <!-- if you just pass the function, the first param of the function will be second param of the $emit by default -->
  <btn-text @my-event="byWord" label="By Word"></btn-text>
  <p>{{ displayText }}</p>
  <div>
    <h2>passing v-model to component</h2>
    <!-- 
    <input type="text" v-model="inputText"> 
    translates to
    <input type="text" :value="inputText" @input="inputText = $event.target.value"> 
  -->

    <!-- 
    do same to pass v-model to components

    <custom :model-value='inputText' @update:model-value="inputText = $event"></custom>

    App.component('custom', {
      props: ['modelValue'],
      template: `<input :value="modelValue" @input="$emit('update:modalValue', $event.target.value)" />`
    })
   -->
  </div>
</template>

<script>
import BtnText from './BtnText'

export default {
  name: 'EventsComponent',
  data() {
    return {
      displayText: '',
      counter: 0
    }
  },
  methods: {
    // in this case text = sentence
    byWord(text) {
      this.displayText += text.split(' ')[this.counter++] + ' '
    }
  },
  components: {
    BtnText,
  }
}
</script>