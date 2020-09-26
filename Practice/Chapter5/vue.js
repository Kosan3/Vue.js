let bannerMember = {
  template: `
    <div class="banner">
      <h3>WINGSメンバー募集中！</h3>
      <p>プロジェクトに参加しませんか？<br>
      現在、募集中です。</p>
    </div>
  `
};

let bannerNew = {
  template: `
    <div class="banner">
      <h3>新刊「HTML5超入門 」発売</h3>
      <p>ステップバイステップで学ぶ入門書です。<br />
        HTML5アプリの基礎知識、画面のデザイン、コードの書き方などが理解できます。</p>
    </div>
  `
};

new Vue({
  el: '#app',
  components: {
    'banner-member': bannerMember,
    'banner-new': bannerNew
  },
  created: function() {
    let that = this;
    this.interval = setInterval(function() {
      that.current = (that.current + 1) % that.components.length;
    }, 3000);
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
  },
  computed: {
    currentBanner: function() {
      return 'banner' + this.components[this.current];
    }
  },
  data: {
    current: 0,
    components: ['member', 'new']
  }
});