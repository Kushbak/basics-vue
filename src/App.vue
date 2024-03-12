<template>
  <div>
    <h2>Image and props</h2>
    <!-- <img width="400" alt="vue logo" v-bind:src="img"> -->
    <img width="400" alt="vue logo" :src="img">
    {{ msg }}
  </div>

  <div>
    <h2>Loop</h2>
    <p>also u can get index of loop (product, index) of products</p>
    <div class="products__container">
      <div v-for="product in products" :key="product.id" class="product__item">
        <p>{{ product.name }}</p>
      </div>
    </div>
  </div>

  <div>
    <h2>Conditions</h2>
    <p>use v-for with f-if is not recommended bcs v-if has higher priority than v-for</p>
    <!-- ! dont -->
    <!-- <div v-for="product in products" :key="product.key" v-if="product.id % 2 === 0">{{ product.name }}</div> -->
    <!-- ! do instead -->
    <template v-for="product in products" :key="product.id">
      <div v-if="product.id % 2 === 0 && product.id % 3 === 0">0 {{ product.name }}</div>
      <div v-else-if="product.id % 2 === 0">1 {{ product.name }}</div>
      <div v-else>2 {{ product.name }}</div>
    </template>
  </div>


  <div>
    <h2>Inputs</h2>
    <div>
      <div class="filters__container">
        <input type="text" v-model.number="filters.maxPriceFilter">
        <input type="range" min='0' max="1000" v-model="filters.maxPriceFilter">
        <div>
          Show only even products <input type="checkbox" v-model="filters.showEvenOnly">
        </div>
        <div>
          Show description <input type="checkbox" v-model="filters.withDescription">
        </div>
        <div class="filters__categories">
          <h4>Categories: {{ filters.filteredCategories }}</h4>
          <div v-for="(category, index) in categories" :key="index">
            <input type="checkbox" v-model="filters.filteredCategories" :value="category"> {{ category }}
          </div>
        </div>
      </div>
      <div class="products__container">
        <template v-for="product in filteredProducts" :key="product.id">
          <!-- <product-item v-bind="product"></product-item> -->
          <div class="products__item">
            <p>{{ product.name }} ${{ product.price }}</p>
            <p>Category - {{ product.category }}</p>
            <p v-if="filters.withDescription">Description - {{ product.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div>
    <h2>Events</h2>
    <div class="filters__container">
      <!-- v-on:eventName or @event shortcut -->
      <!-- with event modifiers by dot, for example @click.once -->
      <button @click="handleClick">click</button>
      <button @click="handleClickWithArgs('2btn', $event)">click with args</button>
      <button @click="handleClick(), handleClickWithArgs('2btn', $event)">click with multiple methods</button>

      <!-- there is also key events with modifiers @keyevent -->
      <input type="text" @keypress="handleKeyEvent" placeholder="ctrl + enter">
    </div>
  </div>

</template>

<script>
const products = [
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "category": "Electronics",
    "description": "Powerful laptop with high-performance specifications for work and entertainment."
  },
  {
    "id": 2,
    "name": "Smartphone",
    "price": 699.99,
    "category": "Electronics",
    "description": "Latest smartphone model with advanced features and a high-quality camera."
  },
  {
    "id": 3,
    "name": "Coffee Maker",
    "price": 79.99,
    "category": "Home & Kitchen",
    "description": "Automatic coffee maker for brewing delicious coffee at home with ease."
  },
  {
    "id": 4,
    "name": "Blender",
    "price": 49.99,
    "category": "Home & Kitchen",
    "description": "Versatile blender for creating smoothies, shakes, and more."
  },
  {
    "id": 5,
    "name": "Running Shoes",
    "price": 89.99,
    "category": "Clothing",
    "description": "Comfortable and durable running shoes for your active lifestyle."
  },
  {
    "id": 6,
    "name": "Winter Jacket",
    "price": 129.99,
    "category": "Clothing",
    "description": "Warm and stylish winter jacket to keep you cozy in cold weather."
  },
  {
    "id": 7,
    "name": "Yoga Mat",
    "price": 19.99,
    "category": "Sports & Outdoors",
    "description": "Non-slip yoga mat for a comfortable and stable practice during yoga sessions."
  },
  {
    "id": 8,
    "name": "Dumbbells",
    "price": 39.99,
    "category": "Sports & Outdoors",
    "description": "Set of dumbbells for strength training and muscle building at home or the gym."
  },
  {
    "id": 9,
    "name": "Face Cream",
    "price": 29.99,
    "category": "Beauty",
    "description": "Moisturizing face cream to keep your skin hydrated and healthy."
  },
  {
    "id": 10,
    "name": "Shampoo",
    "price": 14.99,
    "category": "Beauty",
    "description": "Gentle shampoo for daily use, suitable for all hair types."
  }
];
const categories = [
  "Electronics",
  "Home & Kitchen",
  "Clothing",
  "Sports & Outdoors",
  "Beauty"
];

export default {
  name: 'App',
  data() {
    return {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freecreatives.com%2Fwp-content%2Fuploads%2F2015%2F03%2FHuge-Backgrounds-17.jpg&f=1&nofb=1&ipt=da8972c5ef8521a4caec0edb360d7bc9d7fd5af7c2cdc05b206842245826ca59&ipo=images',
      msg: 'hello world 2',
      products,
      categories,
      filters: {
        maxPriceFilter: 1000,
        showEvenOnly: false,
        filteredCategories: [],
        withDescription: true,
      },
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product, index) => {
        return product.price <= this.filters.maxPriceFilter
          && (!this.filters.showEvenOnly || index % 2 === 0)
          && (
            !this.filters.filteredCategories.length
            || this.filters.filteredCategories.includes(product.category)
          )
      })
    },
  },
  methods: {
    handleClick() {
      console.log('clicked')
    },
    handleClickWithArgs(text, e) {
      console.log(text, e.target.innerText)
    },
    handleKeyEvent(e) {
      console.log('on ctrl space', e)
      e.target.value = 'asadsasd'
    }
  }
}

// ! moved to main.js
// const App = createApp(app)

// App.component('product-item', {
//   props: ['product'],
//   template: `<div
//     class="products__item">
//     <p>{{ product.name }} $\{{ product.price }}</p>
//     <p>Category - {{ product.category }}</p>
//     <p v-if="filters.withDescription">Description - {{ product.description }}</p>
//   </div>`
// })

// export default App

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.products__item {
  padding: 8px;
  margin-top: 7px;
  border: 1px solid black;
  border-radius: 4px;
}

.filters__container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
}
</style>
