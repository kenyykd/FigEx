<script setup>
export default {
  data () {
    return {
      items: [
        { name: '商品1', price: 100, quantity: 1 },
        { name: '商品2', price: 200, quantity: 2 },
        { name: '商品3', price: 300, quantity: 3 }
      ],
      searchText: ''
    };
  },
  computed: {
    // 計算商品總數
    totalQuantity () {
      return this.items.reduce((sum, item) => sum + Number(item.quantity), 0)
    },
    // 計算總金額
    totalPrice () {
      return this.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    // 計算折扣後金額
    discountedPrice () {
      const total = this.totalPrice
      return total >= 1000 ? total * 0.9 : total
    },
    // 搜尋過濾
    filteredItems () {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase().trim())
      )
    }
  }
};
</script>

<template>
<h2>Computed 計算屬性</h2>∆
  <!-- 購物車範例 -->
  <div>
    <h3>購物車</h3>
    <div class="input-group" v-for="(item, index) in items" :key="index">
      <label>{{ item.name }}</label>
      <input type="number" v-model="item.quantity" min="0">
      單價：{{ item.price }} 元
    </div>

    <div class="result">
      <p>商品總數：{{ totalQuantity }}</p>
      <p>總金額：{{ totalPrice }} 元</p>
      <p>折扣後金額（滿1000打9折）：{{ discountedPrice }} 元</p>
    </div>
  </div>

</template>