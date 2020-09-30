let myHello = {
  props: ['yourName'],
  template: `
    <div>こんにちは、{{ yourName }}さん!</div>
  `
};

new Vue({
  components: {
    'my-hello': myHello
  },
  el: '#app'
})