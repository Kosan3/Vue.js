new Vue({
  el: '#app',
  data: {
    books: [
      {
        title: 'Javascript',
        price: 1200
      },
      {
        title: 'Ruby',
        price: 900
      },
      {
        title: 'Java',
        price: 1300
      }
    ]
  },
  computed: {
    expensiveBooks: function() {
      return this.books.filter(function(book) {
        return book.price < 1000;
      })
    }
  }
})