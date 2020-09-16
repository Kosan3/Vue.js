new Vue({
  el: '#app',
  data: {
    mails: []
  },
  computed: {
    isValue: function() {
      return this.mails.join(';')
    }
  },
  methods: {
    inputMails: function(e) {
      this.mails = e.target.value.split(';')
    }
  }
});