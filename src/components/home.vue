<template>
  <div style="margin:10px;">
  <b-jumbotron header="Who Is Spy" lead="純屬練習">
    <p>遊戲規則：</p>
    <p>每輪每個玩家只允許說一句話描述自己的身份詞</p>
    <p>既不能讓臥底發現，也要給同伴暗示</p>
    <p>玩家發言完畢後開始投票</p>
    <p>獲票超過50%的玩家出局</p>
    <p>活著的平民小於等於2時，臥底勝利。</p>
  </b-jumbotron>
  <div>
  <b-button @click="newRoom">建立房間</b-button>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log(this.$route.query.act)
    if (this.$route.query.act == "addplayer") {
      this.$router.push({name: 'addplayer', query: {act :"addplayer", roomID :this.$route.query.roomID}})
    }

    if (this.$route.query.act == "getcard") {
      this.$router.push({name: 'getcard', query: {act:"getcard",roomID :this.$route.query.roomID, playerID: this.$route.query.playerID}})
    }

    if (this.$route.query.act == "newroom") {
      this.$router.push({name: 'newroom', query:{act:"newroom"}})
    }
  },
  methods: {
     newRoom() {
      this.$router.push({ name: 'newroom', query:{act:"newroom"} })
    },
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
