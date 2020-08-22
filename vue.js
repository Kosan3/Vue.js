var items = [{name:'たこ焼き', price:300, quantity:0}, {name:'焼きそば', price:250, quantity:0}];

var vm = new Vue ({
  el: "#app",
  data: {
    items: items
  }
})