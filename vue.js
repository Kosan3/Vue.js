let items = [
  {
    name: '鉛筆', price: 300, quantity: 1
  }, {
    name: 'ノート', price: 400, quantity: 1
  }, {
    name: '消しゴム', price: 500, quantity: 1
  }
]

let vm = new Vue({
  el: '#app',
  data: {
    items: items
  },
  filters: {
    numberWithDelimiter: function(value) {
      console.log(!value);
      if (!value) {
        return '0';
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function(prev, current, index, array) {
        return prev + (current.price * current.quantity);
      }, 0)
    },
    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.1);
    },
    canBuy: function() {
      return this.totalPrice <= 2000;
    }
  }
})