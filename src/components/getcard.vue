<template>
  <div class="hello">
    <b-container style="margin-top: 50pt;width: 500pt;text-align: center;">
      <div class="centered-wrap">
        <div class="card-wrap">
          <div class="card" ref='card' @click="rotateCard()">
            <div class="card-back">  
              </div>
            <div class="card-front">
              <span>{{topic}}</span>
            </div>
          </div>
  </div>
</div>
<div></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'getcard',
  data () {
    return {
      name: '',
      msg:'',
      topic:'',
      cardRotate: 180,
    }
  },
  mounted() {
    this.getCard()
    // setInterval(() => {
    //   // this.$router.go(0)
    //   this.getCard()
    // }, 5000)
  },
  methods: {
    rotateCard() {
      this.$refs.card.style.transform = `rotateY(${this.cardRotate}deg)`
      this.cardRotate+=180
    },
    getCard() {
      this.$http.get("https://whoisspy.herokuapp.com/getCard/"+ this.$route.query.roomID+ "/"+ this.$route.query.playerID).then((res) =>{
        console.log(res)
        this.topic = res.data.Topic

        var room = JSON.parse(res.data.Room)
        console.log(room)
      },function(res) {
        this.msg = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered-wrap{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}

.card-wrap{
  margin-top: 250px;
  width:200px;
  height:280px;
  position:relative;
}

.card{
  position:absolute;
  width:100%;
  height:100%;
  /*preserve the back when fliping*/
  transform-style:preserve-3d;
  transition:0.5s all ease;
  box-shadow:0px 0px 10px rgba(10,10,0.8);
}

/* .card:hover{
  transform:rotateY(180deg);
} */

/*front card*/
.card-front{
  border-radius:5px;
  position:absolute;
  width:100%;
  height:100%;
  /*hide backface*/
  backface-visibility:hidden;
  color:#333;
  font-size:1.5rem;
  transform:rotateY(180deg);

  -webkit-backface-visibility: hidden;  
  -moz-backface-visibility: hidden;  
  -ms-backface-visibility: hidden; 
  backface-visibility: hidden;  
  -webkit-perspective: 1000;  
  -moz-perspective: 1000;  
  -ms-perspective: 1000;  
  perspective: 1000; 
}

.card-front span{
  display:block;
  position:absolute;
  top:42%;
  left:32%;
}

.card-front img{
  display:block;
  position:relative;
  left:25%;
  top:25%;
/*   transform:translate(-50%,-50%); */
}

.card-front span:nth-of-type(2){
  display:block;
  position:absolute;
  right:5%;
  bottom:5%;
}

/*back card*/
.card-back{
   border-radius:5px;
  position:absolute;
  background:#e8e8e8;
  width:100%;
  height:100%;
  /*hide backface*/
  backface-visibility:hidden;
  color:#333;
  background:url("https://preview.ibb.co/bF05wV/danask.png") center top repeat;
  font-size:1.5rem;
  
}

.tran {  
-webkit-backface-visibility: hidden;  
-moz-backface-visibility: hidden;  
-ms-backface-visibility: hidden; 
backface-visibility: hidden;  
-webkit-perspective: 1000;  
-moz-perspective: 1000;  
-ms-perspective: 1000;  
perspective: 1000;   /* Other transform properties here */}
</style>
