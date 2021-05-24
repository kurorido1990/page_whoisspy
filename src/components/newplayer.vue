<template>
  <div class="hello">
    <b-container style="margin-top: 55pt;width: 200pt;text-align: center;">
      <b-input-group size="sm" class="mb-2">
        <b-form-input v-model="name" @keyup.enter="create" placeholder="請輸入 暱稱" ref="createInput"></b-form-input>
        <b-input-group-prepend is-text>
          <b-icon @click="create" icon="arrow-return-left"></b-icon>
        </b-input-group-prepend>
      </b-input-group>
      <div><h1>{{msg}}</h1></div>
<div></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'newplayer',
  data () {
    return {
      name: '',
      msg:'',
      topic:'',
    }
  },
  mounted() {
    // alert(this.$route.query.roomID)
  },
  methods: {
    create() {
      this.$http.get("https://whoisspy.herokuapp.com/addPlayer/"+ this.$route.query.roomID+ "/"+ this.name).then((res) =>{
        console.log(res)
        this.$router.push({ name: 'getcard', query: { act:"getcard", roomID : this.$route.query.roomID, playerID : res.data.PlayerID} })
      },function(res) {
        this.msg = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
