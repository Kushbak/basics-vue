<template>
  <!-- $event is the second param of $emit inside text-btn component -->
  <!-- in this case $event = sentence -->
  <text-btn @my-event="displayText += $event" label="Sentence"></text-btn>
  <!-- if you just pass the function, the first param of the function will be second param of the $emit by default -->
  <text-btn @my-event="byWord" label="By Word"></text-btn>
</template>
<template>
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

  
</template>

<script>
import { createApp } from 'vue';

const EventComponent = createApp({
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
  }
})


EventComponent.component('btn-text', {
  data() {
    return {
      sentence: 'The quick brown fox jumps over the lazy dog'
    }
  },
  props: ['label'],
  // myEvent will format to kebab-case to use it as @my-event="displayText += $event"
  // where $event is `sentence`
  template: `<button @click="$emit('myEvent', sentence)">{{ label }}</button>`
})

export default EventComponent
</script>