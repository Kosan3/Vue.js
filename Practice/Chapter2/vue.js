new Vue({
  el: '#app',
  data: {
    name: ''
  },
  created: function() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  computed: {
    upperName: function() {
      return this.name.toUpperCase();
    }
  },
  methods: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    }
  }
});