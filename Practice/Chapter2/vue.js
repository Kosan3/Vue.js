new Vue({
  el: '#app',
  data: {
    name: '',
    upperName: ''
  },
  created: function() {
    this.delay = _.debounce(this.getUpper, 2000);
  },
  watch: {
    name: function(newValue, oldValue) {
      this.delay();
    }
  },
  methods: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    }
  }
});