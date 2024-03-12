import { createApp } from 'vue'
import App from './App.vue'

const main = createApp(App)

// main.component('product-item', {
//   props: ['name', 'price', 'category', 'description'],
//   template: `<div
//     class="products__item">
//     <p>{{ name }} $\{{ price }}</p>
//     <p>Category - {{ category }}</p>
//     <p v-if="filters?.withDescription">Description - {{ description }}</p>
//   </div>`
// })

main.mount('#app')
