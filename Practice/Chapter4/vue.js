let myBook = {
  data: function() {
    return {
      book: {
        isbn: '978-4-3234-2111',
        title: 'ワクワクさんの心情',
        price: 3800,
        publish: 'ホグワーツ'
      }
    }
  },
  template: `
    <div>
      <slot :book="book">{{book.title}}  ({{book.publish}})</slot>
    </div>
  `
};

new Vue({
  el: '#app',
  components: {
    'my-book': myBook
  }
});