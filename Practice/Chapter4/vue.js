let myCount = {
  template: `
    <div>
      <button @click="onclick">クリック</button>
      <p>{{ count }}回</p>
      <button @click="reset">リセット</button>
    </div>
  `,
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    onclick: function() {
      this.count += 1;
    },
    reset: function() {
      this.count = 0;
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'my-count': myCount
  }
})