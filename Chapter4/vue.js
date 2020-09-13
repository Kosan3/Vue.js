var getUsers = function (callback) {
  setTimeout(function () {
    callback(null, userData)
  }, 1000)
}

var userData = [
  {
    id: 1,
    name: 'Yuya Kosak',
    description: '埼玉県出身です'
  },
  {
    id: 2,
    name: 'Chinami Ueno',
    description: '兵庫県出身です'
  }
]

var getUser = function(userId, callback) {
  setTimeout(function() {
    var filteredUsers = userData.filter(function(user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000)
}

var UserDetail = {
  template: '#user-detail',
  data: function() {
    return {
      loading: false,
      user: null,
      error: null
    }
  },
  created: function() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      getUser(this.$route.params.userId, (function(err, user) {
        this.loading = false
        if(err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}

var UserList = {
      template: '#user-list',
      data: function () {
        return {
          loading: false,
          users: function () {
            return []
          },
          error: null
        }
      },

      created: function () {
        this.fetchData()
      },

      watch: {
        '$route': 'fetchData'
      },

      methods: {
        fetchData: function () {
          this.loading = true
          getUsers((function (err, users) {
            this.loading = false
            if (err) {
              this.error = err.toString()
            } else {
              this.users = users
            }
          }).bind(this))
        }
      }
    }


var postUser = function (params, callback) {
  setTimeout(function () {
    // idは追加されるごとに自動的にincrementされていく
    params.id = userData.length + 1
    userData.push(params)
    callback(null, params)
  }, 1000)
}

var UserCreate = {
  template: '#user-create',
  data: function () {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },

  created: function () {
  },

  methods: {
    defaultUser: function () {
      return {
        name: '',
        description: ''
      }
    },

    createUser: function () {
      // 入力パラメーターのバリデーション
      if (this.user.name.trim() === '') {
        this.error = 'Nameは必須です'
        return
      }
      if (this.user.description.trim() === '') {
        this.error = 'Descriptionは必須です'
        return
      }
      postUser(this.user, (function (err, user) {
        this.sending = false
        if (err) {
          this.error = err.toString()
        } else {
          this.error = null
          // デフォルトでフォームをリセット
          this.user = this.defaultUser()
          alert('新規ユーザーが登録されました')
          // ユーザー一覧ページに戻る
          this.$router.push('/users')
        }
      }).bind(this))
    }
  }
}

var Auth = {
  login: function (email, pass, cb) {
    // ダミーデータを使った擬似ログイン
    setTimeout(function () {
      if (email === 'vue@example.com' && pass === 'vue') {
        // ログイン成功時はローカルストレージにtokenを保存する
        localStorage.token = Math.random().toString(36).substring(7)
        if (cb) { cb(true) }
      } else {
        if (cb) { cb(false) }
      }
    }, 0)
  },

  logout: function () {
    delete localStorage.token
  },

  loggedIn: function () {
    // ローカルストレージにtokenがあればログイン状態とみなす
    return !!localStorage.token
  }
}

var Login = {
  template: "#login",
  data: function() {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login: function() {
      Auth.login(this.email, this.pass, (function (loggedIn) {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      }).bind(this))
    }
  }
}

var User = {
  template:
    '<div class="user>' +
      '<h2>ユーザーIDは{{$route.params.userId}}です。</h2>' +
      '<router-link :to="\'/user/\' + $route.params.userId + \'/profile\'">ユーザーのプロフィールページを見る</router-link>' +
      '<router-link :to="\'/user/\' + $route.params.userId + \'/posts\'">ユーザーの投稿ページを見る</router-link>' +
      '<router-view></router-view>' +
    '</div>'
}

var UserProfile = {
  template:
    '<div class="user-profile">' +
      '<h3>こちらのユーザーは{{ $route.params.userId }}のプロフィールページです。</h3>' +
    '</div>'
}

var UserPosts = {
  template:
    '<div class="user-posts">' +
      '<h3>こちらのユーザーは{{ $route.params.userId }}の投稿ページです。</h3>' +
    '</div>'
}



var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/new',
      component: UserCreate,
      beforeEnter: function(to, from, next) {
        if (!Auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/users/:userId',
      component: UserDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: function(to, from, next) {
        Auth.logout()
        next('/top')
      }
    },
    {
      path: '*',
      redirect: '/top'
    }
  ]
})


var app = new Vue({
  data: {
    Auth: Auth
  },
  router: router
}).$mount('#app')