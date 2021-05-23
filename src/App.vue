<template>
  <div id="app">
    <OrderForm v-bind:products=products v-bind:orders=orders />
    <Counter v-bind:orders=orders />
    <OrderList v-bind:orders=orders />
  </div>
</template>

<script>
import OrderForm from './components/OrderForm.vue'
import OrderList from './components/OrderList.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'drinkSomething',
  data: function () {
      return { 
        products: [
          {name: "熟成紅茶", price: 25, type: "茶類"},
          {name: "春芽綠茶", price: 25, type: "茶類"},
          {name: "清凝冷露", price: 30, type: "茶類"},
          {name: "珍珠鮮奶茶", price: 60, type: "鮮奶"},
          {name: "紅茶拿鐵", price: 55, type: "鮮奶"},
          {name: "抹茶拿鐵", price: 50, type: "鮮奶"},
          {name: "伯爵拿鐵", price: 60, type: "鮮奶"},
          {name: "芝芝葡萄", price: 85, type: "水果類"},
          {name: "柳橙果粒茶", price: 60, type: "水果類"},
          {name: "葡萄柚綠茶", price: 65, type: "水果類"},
        ],
        orders: []
      }
  },
  components: {
    OrderList,
    OrderForm,
    Counter
  }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
