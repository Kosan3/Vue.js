new Vue({
  el: '#app',
  data: {
    path: 'http://www.web-deli.com/image/linkbanner_l.gif'
  },
  methods: {
    onmouseover: function() {
      this.path = 'http://www.web-deli.com/image/home_chara.gif';
    },
    onmouseout: function() {
      this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
    }
  }
})