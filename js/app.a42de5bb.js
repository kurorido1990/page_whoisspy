(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/page_whoisspy/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"082c":function(t,e,o){},"0ab2":function(t,e,o){t.exports=o.p+"img/logo.e7eaabd8.gif"},1:function(t,e){},2:function(t,e){},2588:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticStyle:{height:"250pt","border-radius":"99em","margin-bottom":"10px"},attrs:{src:o("0ab2")},on:{click:t.back}}),n("router-view")],1)},a=[],i={name:"App",methods:{back:function(){}}},s=i,c=(o("034f"),o("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null),l=u.exports,p=o("8c4f"),d=o("28dd"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{margin:"10px"}},[o("b-jumbotron",{attrs:{header:"Who Is Spy",lead:"純屬練習"}},[o("p",[t._v("遊戲規則：")]),o("p",[t._v("每輪每個玩家只允許說一句話描述自己的身份詞")]),o("p",[t._v("既不能讓臥底發現，也要給同伴暗示")]),o("p",[t._v("玩家發言完畢後開始投票")]),o("p",[t._v("獲票超過50%的玩家出局")]),o("p",[t._v("活著的平民小於等於2時，臥底勝利。")])]),o("div",[o("b-button",{on:{click:t.newRoom}},[t._v("建立房間")]),t._v(" "),o("b-button",{attrs:{variant:"danger"},on:{click:t.monitor}},[t._v("監控房間")])],1)],1)},h=[],y={name:"Home",mounted:function(){console.log(this.$route.query.act),"newplayer"==this.$route.query.act&&this.$router.push({name:"newplayer",query:{act:"newplayer",roomID:this.$route.query.roomID}}),"getcard"==this.$route.query.act&&this.$router.push({name:"getcard",query:{act:"getcard",roomID:this.$route.query.roomID,playerID:this.$route.query.playerID}}),"newroom"==this.$route.query.act&&this.$router.push({name:"newroom",query:{act:"newroom"}}),"monitor"==this.$route.query.act&&this.$router.push({name:"monitor",query:{act:"monitor"}})},methods:{newRoom:function(){this.$router.push({name:"newroom",query:{act:"newroom"}})},monitor:function(){this.$router.push({name:"monitor",query:{act:"monitor"}})}}},f=y,b=(o("e8fd"),Object(c["a"])(f,m,h,!1,null,"4be4f434",null)),g=b.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("b-button",{staticStyle:{margin:"5px"},attrs:{block:""},on:{click:t.back}},[t._v(" 回首頁")]),o("b-container",{staticStyle:{"margin-top":"10pt",width:"230pt","text-align":"center"}},[o("b-input-group",{staticClass:"mb-2",attrs:{size:"sm"}},[o("b-form-input",{ref:"createInput",attrs:{placeholder:"請輸入 遊戲人數，不得小於 4"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.create(e)}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),o("b-input-group-prepend",{attrs:{"is-text":""}},[o("b-icon",{attrs:{icon:"arrow-return-left"},on:{click:t.create}})],1)],1),o("div",{staticStyle:{display:"none"},attrs:{id:"result"}},[o("input",{staticStyle:{display:"none"},attrs:{type:"text",id:"addPlayer"}}),o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"success"},on:{click:function(e){return t.copyCode("addPlayer")}}},[t._v(" 開始遊戲 ")]),t._v(" "),o("br"),o("input",{staticStyle:{display:"none"},attrs:{type:"text",id:"resetRoom"}})],1)],1)],1)},k=[],_={name:"newroom",data:function(){return{text:"",addPlayer:"",monitorRoom:"",resetRoom:""}},methods:{back:function(){this.$router.push({name:"home"})},copyCode:function(t){var e=document.getElementById(t);e.style.display="",e.value="addPlayer"==t?this.addPlayer:this.resetRoom,e.select(),document.execCommand("Copy"),e.style.display="none",alert("已複製好。")},create:function(){var t=this;this.$http.get("https://whoisspy.herokuapp.com/createRoom/"+this.text).then((function(e){var o=e.data;t.addPlayer="https://kurorido1990.github.io/page_whoisspy?act=newplayer&roomID="+o.roomID,t.monitorRoom="https://kurorido1990.github.io/page_whoisspy/room?roomID="+o.roomID,t.resetRoom="https://whoisspy.herokuapp.com/resetRoom/"+o.roomID;var n=document.getElementById("result");n.style.display=""}))}}},I=_,w=(o("f0eb"),Object(c["a"])(I,v,k,!1,null,"0d520737",null)),D=w.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("b-container",{staticStyle:{"margin-top":"55pt",width:"200pt","text-align":"center"}},[o("b-input-group",{staticClass:"mb-2",attrs:{size:"sm"}},[o("b-form-input",{ref:"createInput",attrs:{placeholder:"請輸入 暱稱"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.create(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),o("b-input-group-prepend",{attrs:{"is-text":""}},[o("b-icon",{attrs:{icon:"arrow-return-left"},on:{click:t.create}})],1)],1),o("div",[o("h1",[t._v(t._s(t.msg))])]),o("div")],1)],1)},S=[],$=(o("b0c0"),{name:"newplayer",data:function(){return{name:"",msg:"",topic:""}},mounted:function(){this.$route.query.roomID==localStorage.getItem("roomID")&&this.$router.push({name:"getcard",query:{act:"getcard",roomID:localStorage.getItem("roomID"),playerID:localStorage.getItem("playerID")}})},methods:{create:function(){var t=this;this.$http.get("https://whoisspy.herokuapp.com/addPlayer/"+this.$route.query.roomID+"/"+this.name).then((function(e){localStorage.setItem("roomID",t.$route.query.roomID),localStorage.setItem("playerID",e.data.PlayerID),t.$router.push({name:"getcard",query:{act:"getcard",roomID:t.$route.query.roomID,playerID:e.data.PlayerID}})}),(function(t){this.msg=t.body}))}}}),C=$,q=(o("f310"),Object(c["a"])(C,x,S,!1,null,"38429e52",null)),P=q.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("b-overlay",{attrs:{"no-center":"",show:t.show,rounded:"sm"},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("div",{staticClass:"text-center",staticStyle:{height:"1000pt","background-color":"black",opacity:".92","margin-top":"-400pt"}},[n("div",{staticStyle:{"background-color":"white","padding-top":"100pt",height:"800pt"}},[n("h1",[t._v(" 投票囉 ")]),t._l(t.voteList,(function(e,o){return n("div",{key:o},[n("b-button",{staticStyle:{margin:"5pt"},attrs:{size:"lg",variant:"info"},on:{click:function(n){return t.votePlayer(o,e)}}},[t._v(t._s(e))])],1)}))],2)])]},proxy:!0}])},[n("b-container",{staticStyle:{"margin-top":"50pt",width:"500pt","text-align":"center"}},[n("div",{staticClass:"centered-wrap"},[n("div",{staticClass:"card-wrap"},[n("div",{ref:"card",staticClass:"card",on:{click:function(e){return t.rotateCard()}}},[n("div",{staticClass:"card-back"}),n("div",{staticClass:"card-front"},[n("span",[t._v(t._s(t.topic))]),t.dead?n("img",{staticStyle:{width:"176px",left:"5%"},attrs:{src:o("74a9")}}):t._e()])])])])])],1)],1)},R=[],j=(o("159b"),{name:"getcard",data:function(){return{name:"",msg:"",topic:"",dead:!1,cardRotate:180,show:!1,voteList:{},socket:""}},mounted:function(){this.getCard(),this.connection(1)},methods:{speakEnd:function(){confirm("確定發言完畢?")&&(this.$refs.speak.style.display="none",this.$http.get("https://whoisspy.herokuapp.com/speak/"+this.$route.query.roomID+"/"+this.$route.query.playerID).then((function(t){console.log(t)})))},connection:function(t){this.socket=new WebSocket("wss://whoisspy.herokuapp.com/ws/"+this.$route.query.roomID+"/"+this.$route.query.playerID+"/"+t),this.socket.onmessage=this.onmessage,this.socket.onclose=this.onclose},onclose:function(){this.connection(0)},onmessage:function(t){console.log(t.data);var e=JSON.parse(t.data);if(console.log(e.Data),"reset"==e.Cmd)return alert("遊戲重置了"),this.getCard(),void this.resetSpeak();"startGambling"!=e.Cmd?"kickPlayer"!=e.Cmd?"settlement"!=e.Cmd?"resetSpeak"!=e.Cmd?"endVote"!=e.Cmd||this.endVote():this.resetSpeak():this.settlement(e.Data):this.kickPlayer(e.Data):this.refreshVoteList(e.Data)},endVote:function(){this.show=!1},resetSpeak:function(){},settlement:function(t){1==t&&(alert("平民獲勝！！！"),this.getCard()),2==t&&(alert("間諜獲勝！！！"),this.getCard())},kickPlayer:function(t){alert(t+"被殺了"),this.getCard()},refreshVoteList:function(t){var e=this,o={};t.forEach((function(t){t.ID!=e.$route.query.playerID&&(o[t.ID]=t.Name)})),this.voteList=o,this.show=!0,console.log(this.voteList)},votePlayer:function(t,e){var o=this;confirm("確定要投 "+e+" ？")&&this.$http.get("https://whoisspy.herokuapp.com/vote/"+this.$route.query.roomID+"/"+this.$route.query.playerID+"/"+t).then((function(t){console.log(t),o.show=!1}))},rotateCard:function(){this.$refs.card.style.transform="rotateY(".concat(this.cardRotate,"deg)"),this.cardRotate+=180},getCard:function(){var t=this;this.$http.get("https://whoisspy.herokuapp.com/getCard/"+this.$route.query.roomID+"/"+this.$route.query.playerID).then((function(e){console.log(e),t.topic=e.data.Topic,t.dead=e.data.Dead;var o=JSON.parse(e.data.Room);console.log(o)}),(function(t){this.msg=t.body}))}}}),E=j,N=(o("f7c5"),Object(c["a"])(E,O,R,!1,null,"062af22f",null)),L=N.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-top":"30px","margin-left":"10%","margin-right":"10%"}},[o("b-button",{staticStyle:{margin:"5px"},attrs:{block:""},on:{click:t.back}},[t._v(" 回首頁")]),o("div",{staticClass:"accordion",staticStyle:{"margin-top":"30px"},attrs:{role:"tablist"}},t._l(t.roomList,(function(e,n){return o("b-card",{key:n,staticClass:"mb-1",attrs:{"no-body":""}},[o("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[o("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:n,expression:"index"}],staticStyle:{margin:"5px"},attrs:{block:"",variant:"success"}},[t._v(" RoomID "+t._s(n))]),o("input",{staticStyle:{display:"none"},attrs:{type:"text",id:n+"_link"},domProps:{value:"https://kurorido1990.github.io/page_whoisspy?act=newplayer&roomID="+n}}),o("b-button",{staticStyle:{margin:"5px"},attrs:{block:""},on:{click:function(e){return t.copyCode(n)}}},[t._v(" 取得遊戲連結")]),o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"warning"},on:{click:function(e){return t.startGambling(n)}}},[t._v(" 開始投票")]),o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"info"},on:{click:function(e){return t.endGambling(n)}}},[t._v(" 結束投票")]),o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"danger"},on:{click:function(e){return t.resetGame(n)}}},[t._v(" 重置遊戲")])],1),o("b-collapse",{attrs:{id:n,accordion:"my-accordion",role:"tabpanel"}},[o("b-card-body",[o("b-table",{attrs:{striped:"",hover:"",items:e,fields:t.fields},scopedSlots:t._u([{key:"cell(players)",fn:function(e){return t._l(e.value,(function(e,n){return o("div",{key:n},["間諜"==e.Identity?o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"warning"},on:{click:function(o){return t.copyCode(e.ID)}}},[t._v(" 名稱 : "+t._s(e.Name)+" "),o("br"),t._v(" 身份 : "+t._s(e.Identity)+" "),o("br"),t._v(" 答案 : "+t._s(e.Topic)+" ")]):o("b-button",{staticStyle:{margin:"5px"},attrs:{block:""},on:{click:function(o){return t.copyCode(e.ID)}}},[t._v(" 名稱 : "+t._s(e.Name)+" "),o("br"),t._v(" 身份 : "+t._s(e.Identity)+" "),o("br"),t._v(" 答案 : "+t._s(e.Topic)+" ")])],1)}))}},{key:"cell(spy)",fn:function(e){return t._l(e.value,(function(e,r){return o("div",{key:r},[o("input",{staticStyle:{display:"none"},attrs:{type:"text",id:e.ID+"_link"},domProps:{value:"https://kurorido1990.github.io/page_whoisspy/getcard?act=getcard&roomID＝"+n+"&playerID="+e.ID}}),e.Dead?o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"danger"},on:{click:function(o){return t.copyCode(e.ID)}}},[t._v(" 名稱 : "+t._s(e.Name)+" "),o("br"),t._v(" 身份 : "+t._s(e.Identity)+" "),o("br"),t._v(" 答案 : "+t._s(e.Topic)+" ")]):o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"success"},on:{click:function(o){return t.copyCode(e.ID)}}},[t._v(" 名稱 : "+t._s(e.Name)+" "),o("br"),t._v(" 身份 : "+t._s(e.Identity)+" "),o("br"),t._v(" 答案 : "+t._s(e.Topic)+" ")])],1)}))}},{key:"cell(citizens)",fn:function(e){return t._l(e.value,(function(e,r){return o("div",{key:r},[o("input",{staticStyle:{display:"none"},attrs:{type:"text",id:e.ID+"_link"},domProps:{value:"https://kurorido1990.github.io/page_whoisspy/getcard?act=getcard&roomID＝"+n+"&playerID="+e.ID}}),e.Dead?o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"danger"},on:{click:function(o){return t.copyCode(e.ID)}}},[t._v(" 名稱 : "+t._s(e.Name)+" "),o("br"),t._v(" 身份 : "+t._s(e.Identity)+" "),o("br"),t._v(" 答案 : "+t._s(e.Topic)+" ")]):o("b-button",{staticStyle:{margin:"5px"},attrs:{block:"",variant:"success"},on:{click:function(o){return t.copyCode(e.ID)}}},[t._v(" 名稱 : "+t._s(e.Name)+" "),o("br"),t._v(" 身份 : "+t._s(e.Identity)+" "),o("br"),t._v(" 答案 : "+t._s(e.Topic)+" ")])],1)}))}}],null,!0)})],1)],1)],1)})),1)],1)},z=[],G={name:"monitor",data:function(){return{msg:"Monitor Room",fields:[{key:"spy_num",sortable:!0},{key:"max_limit",sortable:!0},{key:"players",label:"全體玩家"},{key:"spy",label:"間諜"},{key:"citizens",label:"平民"}],roomList:{}}},mounted:function(){this.getData()},methods:{back:function(){this.$router.push({name:"home"})},endGambling:function(t){this.$http.get("https://whoisspy.herokuapp.com/endVote/"+t).then((function(t){console.log(t)}))},startGambling:function(t){this.$http.get("https://whoisspy.herokuapp.com/startVote/"+t).then((function(t){console.log(t)}))},resetGame:function(t){var e=this;this.$http.get("https://whoisspy.herokuapp.com/resetRoom/"+t).then((function(t){console.log(t),e.getData(),alert("重置完成")}))},copyCode:function(t){var e=document.getElementById(t+"_link");e.style.display="",e.select(),document.execCommand("Copy"),e.style.display="none",alert("已複製好。")},getData:function(){var t=this;this.$http.get("https://whoisspy.herokuapp.com/monitor").then((function(e){var o=JSON.parse(e.data.RoomList),n={};o.forEach((function(t){var e={};e["id"]=t.ID,e["max_limit"]=t.MaxLimit;var o=[];t.Players.forEach((function(t){2==t.Identity?t.Identity="間諜":t.Identity="平民",o.push(t)})),console.log(o);var r=[];t.Spy.forEach((function(t){t.Identity="間諜",r.push(t)}));var a=[];t.Citizens.forEach((function(t){t.Identity="平民",a.push(t)})),e["players"]=o,e["spy"]=r,e["citizens"]=a,e["spy_num"]=t.SpyNum,null==n[t.ID]&&(n[t.ID]=[]),n[t.ID].push(e)})),t.roomList=n})).catch((function(t){console.log(t)}))}}},V=G,M=(o("6863"),Object(c["a"])(V,T,z,!1,null,"5286dad6",null)),J=M.exports,B=o("5f5b"),W=o("b1e0");o("f9e3"),o("2dd8");n["default"].use(B["a"]),n["default"].use(W["a"]),n["default"].use(p["a"]),n["default"].use(d["a"]);var A=new p["a"]({mode:"history",routes:[{path:"/page_whoisspy",name:"home",component:g},{path:"/page_whoisspy/newroom",name:"newroom",component:D},{path:"/page_whoisspy/newplayer",name:"newplayer",component:P},{path:"/page_whoisspy/getcard",name:"getcard",component:L},{path:"/page_whoisspy/monitor",name:"monitor",component:J}]}),H=o("049c"),Y=o.n(H);n["default"].use(Y.a),n["default"].config.productionTip=!1,n["default"].use(d["a"]),new n["default"]({router:A,render:function(t){return t(l)},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},6863:function(t,e,o){"use strict";o("c367")},"74a9":function(t,e,o){t.exports=o.p+"img/dead.b4db9b83.jpg"},"85ec":function(t,e,o){},"9d08":function(t,e,o){},"9e20":function(t,e,o){},c367:function(t,e,o){},e8fd:function(t,e,o){"use strict";o("9d08")},f0eb:function(t,e,o){"use strict";o("2588")},f310:function(t,e,o){"use strict";o("9e20")},f7c5:function(t,e,o){"use strict";o("082c")}});