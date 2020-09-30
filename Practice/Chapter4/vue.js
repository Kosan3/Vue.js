let myCounter = {
  props: [ 'step' ],
  template: `
    <button type="button" @click="onclick">{{step}}</button>
  `,
  methods: {
    onclick: function() {
      this.$emit('plus', Number(this.step));
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'my-counter': myCounter
  },
  data: {
    current: 0
  },
  methods: {
    onplus: function(e) {
      this.current += e;
    }
  }
})