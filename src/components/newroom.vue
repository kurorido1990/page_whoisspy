<template>
  <div class="hello">
    <b-container style="margin-top: 10pt;width: 230pt;text-align: center;">
      <b-input-group size="sm" class="mb-2">
        <b-form-input v-model="text" @keyup.enter="create" placeholder="請輸入 遊戲人數" ref="createInput"></b-form-input>
        <b-input-group-prepend is-text>
          <b-icon @click="create" icon="arrow-return-left"></b-icon>
        </b-input-group-prepend>
      </b-input-group>
      <div id="result" style="display:none">
         <input type="text" style="display:none" id="addPlayer" />
         <b-button block variant="success" @click="copyCode('addPlayer')" style="margin:5px"> 開始遊戲 </b-button> <br />
         <input type="text" style="display:none" id="resetRoom" />
         <b-button block variant="danger" @click="copyCode('resetRoom')" style="margin:5px"> 重置遊戲 </b-button> <br />
      </div>      
    </b-container>
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
      resetRoom:'',
    }
  },
   // e.g. <div ref="text">

  methods: {
     copyCode(id) {
      var copycode = document.getElementById(id);
      copycode.style.display = ""
      if (id == 'addPlayer') {
        copycode.value = this.addPlayer
      } else {
        copycode.value = this.resetRoom
      }
      copycode.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      copycode.style.display = "none"
      alert("已複製好。")
    },
    create() {
      this.$http.get("https://whoisspy.herokuapp.com/createRoom/"+ this.text).then((res) =>{
         var tmpData = res.data
         this.addPlayer = "https://kurorido1990.github.io/page_whoisspy?act=newplayer&roomID=" + tmpData.roomID
         this.monitorRoom = "https://kurorido1990.github.io/page_whoisspy/room?roomID=" + tmpData.roomID
         this.resetRoom = "https://whoisspy.herokuapp.com/resetRoom/" + tmpData.roomID
        // this.addPlayer = "http://localhost:8081/newplayer?roomID=" + tmpData.roomID
        //  this.monitorRoom = "http://localhost:8081/room?roomID=" + tmpData.roomID

          var result = document.getElementById('result');
          result.style.display=""

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
