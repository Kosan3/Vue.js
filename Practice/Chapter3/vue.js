new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    onchange: function() {
      let that = this;
      let fl = this.$refs.upfile.files[0];
      let data = new FormData();
      data.append('upfile', fl, fl.name);
      fetch('upload.php')
    }
  }
})