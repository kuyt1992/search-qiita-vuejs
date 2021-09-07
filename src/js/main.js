var app = new Vue({
    el: '#app',
    data: {
      items: null,
      keyword: '',
      message: ''
    },
    watch: {
      
    },
    created: function() {
      this.keyword = 'JavaScript'
      this.getAnswer()
    },
    methods: {
      getAnswer: function() {
        if(this.keyword === '') {
          this.items = null
          return
        }
        this.message = 'Loading...'
        var vm = this
        var params = { page: 1, per_page: 20, query: this.keyword }
        axios.get('https://qiita.com/api/v2/items', { params })
        .then(function(res){
          vm.items = res.data
        })
        .catch(function(err) {
          vm.message = 'Error' + err
        })
        .finally(function() {
          vm.message = ''
        })
      }
    }
})