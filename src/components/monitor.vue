<template>
<div style="    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;">
  <b-button block @click="back"  style="margin:5px"> 回首頁</b-button>
  <div class="accordion" role="tablist" style="margin-top:30px">
    <b-card v-for="(items, index) in roomList" no-body class="mb-1" :key="index">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="index" variant="success"  style="margin:5px"> RoomID {{ index }}</b-button>
        <input type="text" style="display:none" :id="index+'_link'" :value="'https://kurorido1990.github.io/page_whoisspy?act=newplayer&roomID='+index" />
        <b-button block @click="copyCode(index)"  style="margin:5px"> 取得遊戲連結</b-button>
        <b-button block @click="startGambling(index)" variant="warning"  style="margin:5px"> 開始投票</b-button>
        <b-button block variant="danger"  @click="resetGame(index)"  style="margin:5px"> 重置遊戲</b-button>
      </b-card-header>
      <b-collapse :id="index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table striped hover :items="items" :fields="fields">

            <template #cell(players)="data">
                <div v-for="(player, pindex) in data.value" :key="pindex"> 
                  <b-button v-if="player.Identity == '間諜'" @click="copyCode(player.ID)" block variant="warning"  style="margin:5px">
                     名稱 : {{player.Name}} <br />
                     身份 : {{player.Identity}} <br />
                     答案 : {{player.Topic}}                    
                  </b-button>
                  <b-button v-else block @click="copyCode(player.ID)" style="margin:5px">
                     名稱 : {{player.Name}} <br />
                     身份 : {{player.Identity}} <br />
                     答案 : {{player.Topic}}                    
                  </b-button>
                </div>
            </template>

            <template #cell(spy)="data">
                <div v-for="(spy, sindex) in data.value" :key="sindex"> 
                  <input type="text" style="display:none" :id="spy.ID+'_link'" :value="'https://kurorido1990.github.io/page_whoisspy/getcard?act=getcard&roomID＝'+index+'&playerID='+spy.ID" />
                  <b-button v-if="!spy.Dead" block variant="success" @click="copyCode(spy.ID)"  style="margin:5px">
                     名稱 : {{spy.Name}} <br />
                     身份 : {{spy.Identity}} <br />
                     答案 : {{spy.Topic}}                    
                  </b-button>
                  <b-button v-else block variant="danger" @click="copyCode(spy.ID)" style="margin:5px">
                     名稱 : {{spy.Name}} <br />
                     身份 : {{spy.Identity}} <br />
                     答案 : {{spy.Topic}}                    
                  </b-button>
                </div>
            </template>

            <template #cell(citizens)="data">
                <div v-for="(citizen, cindex) in data.value" :key="cindex"> 
                  <input type="text" style="display:none" :id="citizen.ID+'_link'" :value="'https://kurorido1990.github.io/page_whoisspy/getcard?act=getcard&roomID＝'+index+'&playerID='+citizen.ID" />
                  <b-button v-if="!citizen.Dead" block variant="success" @click="copyCode(citizen.ID)"  style="margin:5px">
                     名稱 : {{citizen.Name}} <br />
                     身份 : {{citizen.Identity}} <br />
                     答案 : {{citizen.Topic}}                    
                  </b-button>
                  <b-button v-else block variant="danger" @click="copyCode(citizen.ID)"  style="margin:5px">
                     名稱 : {{citizen.Name}} <br />
                     身份 : {{citizen.Identity}} <br />
                     答案 : {{citizen.Topic}}                    
                  </b-button>
                </div>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'monitor',
  data () {
    return {
      msg: 'Monitor Room',
      fields: [
          {
            key: 'spy_num',
            sortable: true,
          },
          {
            key: 'max_limit',
            sortable: true,
          },
          {
            key: 'players',
            label:'全體玩家',
          },
          {
            key: 'spy',
            label:'間諜'
          },
          {
            key: 'citizens',
            label:'平民'
          },
          
        ],
      roomList: {},   
    }
  },
  
  mounted(){
    this.getData()
    // setInterval(() => {
    //   // this.$router.go(0)
    //   this.getData()
    // }, 5000)
  },
  methods: {
    back () {
      this.$router.push({ name: 'home' })
    },
    startGambling(id) {
      this.$http.get("https://whoisspy.herokuapp.com/startVote/" + id).then((res) => {
        console.log(res)
      })
    },
    resetGame(id) {
      this.$http.get("https://whoisspy.herokuapp.com/resetRoom/" + id).then((res) => {
      // this.$http.get("/api/resetRoom/" + id).then((res) => {
        console.log(res)
        this.getData()
        alert("重置完成")
      })
    },
    copyCode(id) {
      var copycode = document.getElementById(id+'_link');
      copycode.style.display = ""
      copycode.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      copycode.style.display = "none"
      alert("已複製好。")
    },
    getData () {
      this.$http.get("https://whoisspy.herokuapp.com/monitor").then((res) =>{
        // this.$http.get("/api/monitor").then((res) =>{
          // console.log(res)
        // console.log(JSON.parse(res.data.RoomList));
         var tmpData = JSON.parse(res.data.RoomList)

         var newRoomList = {}
         tmpData.forEach(function(item) {
           var data = {}
           data["id"] = item.ID
           data["max_limit"] = item.MaxLimit

          var players = []
          item.Players.forEach(function(item) {
            if (item.Identity == 2) {
              item.Identity = "間諜"
            } else {
              item.Identity = "平民"
            }

            players.push(item)
          })

          console.log(players)

          var spy = []
          item.Spy.forEach(function(item) {
            item.Identity = "間諜"
            spy.push(item)
          })

          var citizens = []
          item.Citizens.forEach(function(item) {
            item.Identity = "平民"
            citizens.push(item)
          })

           data["players"] = players
           data["spy"] = spy
           data["citizens"] = citizens
           data["spy_num"] = item.SpyNum

          if (newRoomList[item.ID] == null) {
            newRoomList[item.ID] = []
          }

           newRoomList[item.ID].push(data)
         });

         this.roomList = newRoomList
      }).catch(err => {
        console.log(err)
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
