let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '山田'
    }
  },
  created: function() {
    let that = this;
    this.timer = setInterval(function() {
      Vue.set(that.author, 'company', 'Wingsプロジェクト');
    }, 3000);
  }
});