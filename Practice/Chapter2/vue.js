new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    onclick: function(hoge) {
      this.message = new Date().toLocaleString() + hoge;
    }
  }
});