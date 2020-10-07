let tabMember = {
  template: `
    <div class="tab">
      <p>あなたもWINGSプロジェクトに参加しませんか？<br>
      現在、WINGSプロジェクトは、ご一緒にお仕事ができる仲間を募集中です。</p>
      <label>名前：<input type="text" v-model="name"></label>
      <input type="submit" value="登録">
    </div>
  `,
  data: function() {
    return {
      name: ''
    }
  }
};

let tabNew = {
  template: `
    <div class="tab">
      <h3>「HTML5超入門」発売！</h3>
      <p>sステップバイステップで学ぶ入門書です。<br>
      HTML5アプリの基礎知識、画面のデザイン。</p>
    </div>
  `
};

let tabEnv = {
  template: `
    <div class="tab">
      <p>開発環境の設定方法を図を交えて詳しく解説します。<br>
      さあ、あなたもやりましょうよ</p>
    </div>
  `
};

new Vue({
  el: '#app',
  components: {
    'tab-member': tabMember,
    'tab-new': tabNew,
    'tab-env': tabEnv
  },
  methods: {
    onclick: function(tab) {
      console.log(tab);
      this.current = tab;
    }
  },
  computed: {
    tabNames: function() {
      return Object.keys(this.tabs);
    },
    currentTab: function() {
      return 'tab-' + this.current;
    }
  },
  data: {
    current: 'member',
    tabs: {
      'member': 'メンバー募集',
      'new': '新刊紹介',
      'env': '環境構築設定'
    }
  }
});

let obj = {
  'member': 'メンバー募集',
  'new': '新刊紹介',
  'env': '環境構築設定'
};

console.log(Object.keys(obj));