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
      <div>
        <input type="text" v-model.number="filters.maxPriceFilter">
      </div>
      <div>
        <input type="range" min='0' max="1000" v-model="filters.maxPriceFilter">
      </div>
      <div>
        Show only even products <input type="checkbox" v-model="filters.showEvenOnly">
      </div>
      <div>
        <h4>Categories: {{ filters.filteredCategories }}</h4>
        <div v-for="(category, index) in categories" :key="index">
          <input type="checkbox" v-model="filters.filteredCategories" :value="category"> {{ category }}
        </div>
      </div>
      <div class="products__container">
        <template v-for="(product, index) in products" :key="product.id">
          <div v-if="product.price <= filters.maxPriceFilter && (!filters.showEvenOnly || index % 2 === 0) && (!filters.filteredCategories.length || filters.filteredCategories.includes(product.category))" class="products__item">
            <p>{{ product.name }} ${{ product.price }}</p>
            <p>Category - {{ product.category }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

</template>

<script>
const products = [
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "category": "Electronics"
  },
  {
    "id": 2,
    "name": "Smartphone",
    "price": 699.99,
    "category": "Electronics"
  },
  {
    "id": 3,
    "name": "Coffee Maker",
    "price": 79.99,
    "category": "Home & Kitchen"
  },
  {
    "id": 4,
    "name": "Blender",
    "price": 49.99,
    "category": "Home & Kitchen"
  },
  {
    "id": 5,
    "name": "Running Shoes",
    "price": 89.99,
    "category": "Clothing"
  },
  {
    "id": 6,
    "name": "Winter Jacket",
    "price": 129.99,
    "category": "Clothing"
  },
  {
    "id": 7,
    "name": "Yoga Mat",
    "price": 19.99,
    "category": "Sports & Outdoors"
  },
  {
    "id": 8,
    "name": "Dumbbells",
    "price": 39.99,
    "category": "Sports & Outdoors"
  },
  {
    "id": 9,
    "name": "Face Cream",
    "price": 29.99,
    "category": "Beauty"
  },
  {
    "id": 10,
    "name": "Shampoo",
    "price": 14.99,
    "category": "Beauty"
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
        filteredCategories: []
      }
    }
  }
}
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
</style>
