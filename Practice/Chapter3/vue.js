new Vue({
  el: '#app',
  data: {
    current: new Date(),
    flag: true
  },
  created: function() {
    let that = this;
    this.timer = setInterval(function() {
      that.current = new Date();
    }, 1000)
  },
  methods: {
    onclick: function() {
      if (this.flag) {
        clearInterval(this.timer);
        this.flag = false;
      } else {
        console.log('aaaa')
        let that = this
        this.timer = setInterval(function() {
          that.current = new Date();
        }, 1000);
        this.flag = true;
      }
    }
  }
})