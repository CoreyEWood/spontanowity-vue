(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4ba1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(t,e,n,o,i,r){var c=Object(a["i"])("Main");return Object(a["e"])(),Object(a["c"])(c)}var i={id:"main",class:"container-fluid"},r={class:"row"},c={class:"col-6"},s={class:"w-auto",id:"map",ref:"map"},u={class:"col-6"},l=Object(a["d"])("h2",null,"Debugging info",-1);function p(t,e,n,o,p,d){var b=Object(a["i"])("TheHeader"),g=Object(a["i"])("Inputs"),f=Object(a["i"])("Activities");return Object(a["e"])(),Object(a["c"])("div",i,[Object(a["d"])(b),Object(a["d"])("div",r,[Object(a["d"])("div",c,[Object(a["d"])("section",null,[Object(a["d"])("div",s,null,512)])]),Object(a["d"])("div",u,[Object(a["d"])(g,{"onButton-click":d.handleButtonClick,range:p.inputs.range,locations:p.locations},null,8,["onButton-click","range","locations"]),Object(a["d"])(f,{location:p.inputs.location,locations:p.locations},null,8,["location","locations"])])]),Object(a["d"])("section",null,[l,Object(a["d"])("p",null,"Inputs: "+Object(a["j"])(p.inputs),1),Object(a["d"])("p",null,"locations: "+Object(a["j"])(p.locations),1)])])}n("d81d"),n("b0c0"),n("b64b"),n("d3b7"),n("96cf");var d=n("1da1"),b=Object(a["o"])("data-v-0f3f8041");Object(a["g"])("data-v-0f3f8041");var g={id:"activities"},f=Object(a["d"])("h2",null,"Activities",-1);Object(a["f"])();var m=b((function(t,e,n,o,i,r){return Object(a["e"])(),Object(a["c"])("section",g,[f,Object(a["d"])("ul",null,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(r.activitiesList,(function(t){return Object(a["e"])(),Object(a["c"])("li",{key:t},Object(a["j"])(t),1)})),128))])])})),h=(n("4160"),n("159b"),{name:"Activities",computed:{activitiesList:function(){var t=[];this.activities.general.forEach((function(e){t.push(e)}));for(var e=0,n=Object.keys(this.locations);e<n.length;e++){var a=n[e];"anywhere"!=this.location&&a!=this.location||"anywhere"==a||this.activities[a].forEach((function(e){t.push(e)}))}return t}},data:function(){return{activities:{general:["Say hi to the first person you see","Do a flip, bro"],library:["Read a book","Ask the librarian why she is so old","Make out in the stacks"],park:["Have a picnic","Go for a walk","Birdwatch","Look at trees","Play hide and go seek"],restaurant:["Eat something"]}}},props:{location:String,locations:Object}});n("6c56");h.render=m,h.__scopeId="data-v-0f3f8041";var O=h,j=Object(a["o"])("data-v-c5778ad0");Object(a["g"])("data-v-c5778ad0");var v={id:"inputs"},y=Object(a["d"])("h2",null,"Inputs",-1),w={class:"input-group mb-3"},P=Object(a["d"])("div",{class:"input-group-prepend"},[Object(a["d"])("span",{class:"input-group-text"},"Range (mi)")],-1),M={class:"input-group mb-3"},k=Object(a["d"])("div",{class:"input-group-prepend"},[Object(a["d"])("span",{class:"input-group-text"},"Location Type")],-1),x={class:"input-group mb-3"},L=Object(a["d"])("div",{class:"input-group-prepend"},[Object(a["d"])("span",{class:"input-group-text"},"Prominence")],-1),S=Object(a["d"])("option",{value:"huge"},"HUGE",-1),A=Object(a["d"])("option",{value:"large"},"Large",-1),R=Object(a["d"])("option",{value:"smol"},"Smol",-1),I=Object(a["d"])("option",{value:"miniscyool"},"Miniscyool",-1),_={class:"input-group mb-3"},D=Object(a["d"])("div",{class:"input-group-prepend"},[Object(a["d"])("span",{class:"input-group-text"},"Minimum star rating")],-1),B=Object(a["d"])("button",{class:"btn btn-success m-2"},"Enter",-1);Object(a["f"])();var T=j((function(t,e,n,o,i,r){return Object(a["e"])(),Object(a["c"])("section",v,[y,Object(a["d"])("form",{onSubmit:e[5]||(e[5]=Object(a["n"])((function(e){return t.$emit("button-click",i.range,i.location,i.prominence,i.rating)}),["prevent"]))},[Object(a["d"])("div",w,[P,Object(a["m"])(Object(a["d"])("input",{type:"number",class:"form-control",placeholder:"How many miles away are you willing to travel?","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.range=t})},null,512),[[a["l"],i.range]])]),Object(a["d"])("div",M,[k,Object(a["m"])(Object(a["d"])("select",{class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.location=t})},[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(Object.keys(n.locations),(function(t){return Object(a["e"])(),Object(a["c"])("option",{key:t,value:t},Object(a["j"])(n.locations[t]),9,["value"])})),128))],512),[[a["k"],i.location]])]),Object(a["d"])("div",x,[L,Object(a["m"])(Object(a["d"])("select",{class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(t){return i.prominence=t})},[S,A,R,I],512),[[a["k"],i.prominence]])]),Object(a["d"])("div",_,[D,Object(a["m"])(Object(a["d"])("input",{type:"number",class:"form-control",min:"1",max:"5","onUpdate:modelValue":e[4]||(e[4]=function(t){return i.rating=t})},null,512),[[a["l"],i.rating]])]),B],32)])})),C={name:"Inputs",data:function(){return{range:3,location:"anywhere",prominence:"huge",rating:1}},props:{locations:Object}};n("f3c2");C.render=T,C.__scopeId="data-v-c5778ad0";var E=C,H=Object(a["d"])("div",{id:"heading"},[Object(a["d"])("h1",{class:"mt-3"},"Spontanowity"),Object(a["d"])("p",null,"Explore new places!")],-1);function J(t,e,n,o,i,r){return Object(a["e"])(),Object(a["c"])("header",null,[H])}var V={};n("ad90");V.render=J;var N=V,U=6371e3,F=Math.PI/180,G=3*Math.PI,q=2*Math.PI;function z(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Y(t,e){if(t instanceof Array)return t.map((function(t){return Y(t,e)}));if(t instanceof Object){for(var n in t=JSON.parse(JSON.stringify(t)),t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Y(t[n],e));return t}return z(t)?e(t):void 0}function Z(t){return Y(t,(function(t){return t*F}))}function $(t){return Y(t,(function(t){return t/F}))}function K(t,e){var n={},a=Z(t),o=Math.sin(a.latitude),i=Math.cos(a.latitude),r=Math.random()*q,c=e/U,s=Math.sin(r),u=Math.cos(r),l=Math.sin(c),p=Math.cos(c);return n.latitude=Math.asin(o*p+i*l*u),n.longitude=a.longitude+Math.atan2(s*l*i,p-o*Math.sin(n.latitude)),n.longitude=(n.longitude+G)%q-Math.PI,$(n)}function W(t,e,n){var a=Math.random(),o=Math.sqrt(a)*n;while(o<=e)a=Math.random(),o=Math.sqrt(a)*n;return K(t,o)}function Q(t){return Math.floor(Math.random()*Math.floor(t))}function X(t){return 1609.344*t}var tt={"api-key":"AIzaSyAWfBp_l7JJoLYj0AOlHNThBvFbY4ickTg"},et={name:"Main",components:{Activities:O,Inputs:E,TheHeader:N},data:function(){return{apiKey:tt["api-key"],map:null,maxRadius:3,minRadius:800,nearbyPlaceDetails:{},placeMarker:null,service:null,userMarker:null,userPosition:{},inputs:{range:3,location:"anywhere",prominence:"huge",rating:"1"},locations:{anywhere:"Anywhere!",library:"Library",park:"Park",restaurant:"Restaurant"}}},mounted:function(){this.setPosition(),setTimeout(this.renderMap,500)},methods:{nearbySearchAsPromise:function(t){var e=this;return new Promise((function(n){e.service.nearbySearch(t,(function(t){n(t)}))}))},setRandomPlace:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a,o,i,r,c,s,u,l,p,d,b,g,f,m,h,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.placeMarker&&t.renderMap(),a=0;case 2:if(n&&n.length){e.next=13;break}return o=t.getRandomPosition(t.minRadius+a,X(t.inputs["range"])+a),i=void 0,"anywhere"!==t.inputs["location"]&&(i=t.inputs["location"],console.log("location is not anywhere")),r={location:new window.google.maps.LatLng(o["lat"],o["lng"]),radius:"800",type:i},e.next=9,t.nearbySearchAsPromise(r);case 9:n=e.sent,a+=500,e.next=2;break;case 13:return c=["url","name","photos"],s=Q(n.length),u=n[s],e.next=18,t.getPlaceDetails(u,c);case 18:l=e.sent,t.nearbyPlaceDetails=l,t.placeMarker=new window.google.maps.Marker({position:{lat:u.geometry.location.lat(),lng:u.geometry.location.lng()},map:t.map,title:t.nearbyPlaceDetails["name"]}),p=new window.google.maps.LatLng(t.userPosition["lat"],t.userPosition["lng"]),d=new window.google.maps.LatLng(u.geometry.location.lat(),u.geometry.location.lng()),b=new window.google.maps.LatLngBounds(p,d),g=(t.userPosition["lat"]+u.geometry.location.lat())/2,f=(t.userPosition["lng"]+u.geometry.location.lng())/2,m=new window.google.maps.LatLng(g,f),t.map.fitBounds(b),h=t.map.getZoom(),O=t.inputs["range"]<=3?10:t.inputs["range"]<=8?11:t.inputs["range"]<=10?10:t.inputs["range"]<=12?9:6,t.map.setZoom(h<O?O:h),t.map.setCenter(m);case 32:case"end":return e.stop()}}),e)})))()},getDetailsAsPromise:function(t){var e=this;return new Promise((function(n){e.service.getDetails(t,(function(t){n(t)}))}))},getPlaceDetails:function(t,e){var n=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o&&Object.keys(o).length){a.next=7;break}return i={placeId:t.place_id,fields:e},a.next=4,n.getDetailsAsPromise(i);case 4:o=a.sent,a.next=0;break;case 7:return a.abrupt("return",o);case 8:case"end":return a.stop()}}),a)})))()},getRandomPosition:function(t,e){var n=W({latitude:this.userPosition["lat"],longitude:this.userPosition["lng"]},t,e);return this.randLatValue=n.latitude,this.randLongValue=n.longitude,{lat:n.latitude,lng:n.longitude}},setPosition:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.userPosition={lat:e.coords.latitude,lng:e.coords.longitude}}))},renderMap:function(){this.map=new window.google.maps.Map(this.$refs.map,this.mapConfig);var t=new window.google.maps.Marker({position:{lat:this.userPosition["lat"],lng:this.userPosition["lng"]},map:this.map});this.userMarker=t,this.service=new window.google.maps.places.PlacesService(this.map)},handleButtonClick:function(t,e,n,a){this.inputs={range:t,location:e,prominence:n,rating:a},this.setRandomPlace()}},computed:{isGeolocation:function(){return"geolocation"in navigator},mapConfig:function(){return{center:{lat:this.userPosition["lat"],lng:this.userPosition["lng"]},zoom:15}}}};n("b2b1");et.render=p;var nt=et,at={name:"App",components:{Main:nt}};n("64be");at.render=o;var ot=at;Object(a["b"])(ot).mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},"6c56":function(t,e,n){"use strict";n("a2d9")},9736:function(t,e,n){},a2d9:function(t,e,n){},ad90:function(t,e,n){"use strict";n("9736")},b2b1:function(t,e,n){"use strict";n("bd1f")},bd1f:function(t,e,n){},c894:function(t,e,n){},f3c2:function(t,e,n){"use strict";n("4ba1")}});
//# sourceMappingURL=app.6953b815.js.map