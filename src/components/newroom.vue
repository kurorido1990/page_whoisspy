<template>
  <div class="hello">
    <b-container style="margin-top: 10pt;width: 230pt;text-align: center;">
      <b-input-group size="sm" class="mb-2">
        <b-form-input v-model="text" @keyup.enter="create" placeholder="請輸入 遊戲人數" ref="createInput"></b-form-input>
        <b-input-group-prepend is-text>
          <b-icon @click="create" icon="arrow-return-left"></b-icon>
        </b-input-group-prepend>
      </b-input-group>

      
    </b-container>
    <div style="font-size: 12pt;width: 180pt;margin-left: 11px;"><a :href="addPlayer">{{addPlayer}}</a></div>
    <div style="font-size: 12pt;width: 180pt;margin-left: 11px;"><a :href="monitorRoom">{{monitorRoom}}</a></div>
  </div>
</template>

<script>
export default {
  name: 'newroom',
  data () {
    return {
      text: '',
      addPlayer: '',
      monitorRoom:'',
    }
  },
   // e.g. <div ref="text">

  methods: {
    create() {
      this.$http.get("https://whoisspy.herokuapp.com/createRoom/"+ this.text).then((res) =>{
         var tmpData = res.data
         this.addPlayer = "https://kurorido1990.github.io/page_whoisspy/newplayer?roomID=" + tmpData.roomID
         this.monitorRoom = "https://kurorido1990.github.io/page_whoisspy/room?roomID=" + tmpData.roomID
        // this.addPlayer = "http://localhost:8081/newplayer?roomID=" + tmpData.roomID
        //  this.monitorRoom = "http://localhost:8081/room?roomID=" + tmpData.roomID
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
