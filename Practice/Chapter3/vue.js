new Vue({
  el: '#app',
  data: {
    lists: [
      '赤', '青', '黄'
    ]
  },
  methods: {
    onclick: function() {
      this.lists.shift()
    }
  }
});