<template>
<div style="    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;">
    <h2>Topic : {{topicName}}</h2>
    <h3>msgCount : {{msgCount}}
      <span v-if="modifymsg > 0">(<font color=red>+{{modifymsg}}</font>)</span>
      <span v-else-if="modifymsg == 0"></span>
      <span v-else>(<font color=green>{{modifymsg}}</font>)</span>
      , FirstSeq : {{firstSeq}}
      <span v-if="modifyfirst > 0">(<font color=red>+{{modifyfirst}}</font>)</span>
      <span v-else-if="modifyfirst == 0"></span>
      <span v-else>(<font color=green>{{modifyfirst}}</font>)</span>
      , LastSeq: {{lastSeq}}
      <span v-if="modifylast > 0">(<font color=red>+{{modifylast}}</font>)</span>
      <span v-else-if="modifylast == 0"></span>
      <span v-else>(<font color=green>{{modifylast}}</font>)</span>
      </h3>
  <div class="accordion" role="tablist" style="margin-top:30px">
    
    <b-card v-for="(items, index) in clientList" no-body class="mb-1" :key="index">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="index" v-if="isFinish(highestLastSent(items).last_sent)" variant="success"  style="margin:5px"> {{ index }} : {{ highestLastSent(items).last_sent }} </b-button>
        <b-button block v-b-toggle="index" v-else variant="danger"  style="margin:5px"> {{ index }} : {{ highestLastSent(items).last_sent }} </b-button>
      </b-card-header>
      <b-collapse :id="index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table striped hover :items="items" :fields="fields"></b-table>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'topic',
  data () {
    return {
      msg: 'SHIB INU Pump Up',
      fields: [
          {
            key: 'last_sent',
            sortable: true,
          },
          {
            key: 'pending_count',
            sortable: true,            
          },
          {
            key: 'is_durable',
            sortable: true,
          },
          {
            key: 'is_offline',
            sortable: true,
          },
          
        ],
      topicName : '',//"mps.betradar.update.match",
      msgCount : 0,
      modifymsg : 0,
      firstSeq: 0,
      modifyfirst: 0,
      lastSeq: 0,
      modifylast: 0,
      first : false,
      dataList: [],
      clientList: {},   
    }
  },
  
  mounted(){
    this.getData()
    setInterval(() => {
      // this.$router.go(0)
      this.getData()
    }, 5000)
  },
  methods: {
    isFinish(last_sent) {
      if (last_sent == this.lastSeq) {
        return true
      } else {
        return false
      }
    },
    highestLastSent(items){
      if (items.length == 0) return 
      return items.reduce((a,b) => Number(a.last_sent) > Number(b.last_sent) ? a : b)     
    },
    getData () {
      this.$http.get("/api/streaming/channelsz?channel="+ this.$route.query.channel +"&subs=1").then((res) =>{
        var tmpData = res.data

        if (this.first) {
          this.modifymsg = tmpData.msgs - this.msgCount
          this.modifylast = tmpData.last_seq - this.lastSeq
          this.modifyfirst = tmpData.first_seq - this.firstSeq
        } else {
          this.first = true
        }

        this.topicName = tmpData.name
        this.msgCount = tmpData.msgs
        this.firstSeq = tmpData.first_seq
        this.lastSeq = tmpData.last_seq
        this.dataList = tmpData.subscriptions

        var newClientList = {}
        this.dataList.forEach(function (item) {
        var title = item.client_id + "#" + item.queue_name
        
        if (item.is_offline != true) {
          if (newClientList[title] == null) {
          newClientList[title] = []
        }
          var tempData = {}
        tempData["last_sent"] = item.last_sent
        tempData["pending_count"] = item.pending_count
        tempData["is_durable"] = item.is_durable
        tempData["is_offline"] = item.is_offline

        var isOfflineStatus = 'success'

        if (item.is_offline == true) {
          isOfflineStatus = 'danger'
        }

        tempData["_cellVariants"] = {
          "is_offline" : isOfflineStatus
        }

        newClientList[title].push(tempData)
        }

        
      })
      this.clientList = newClientList 
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
