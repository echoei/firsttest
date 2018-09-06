<template>
  <div class="div_layput">
    <a class='a_layout' v-on:click = "onClick('jcn')">简体中文</a>
    <a v-on:click = "onClick('fcn')">繁体中文</a>
    <a v-on:click = "onClick('en')">英文</a>
    <router-view></router-view>
  </div>
 
</template>

<script>
// let textDesc={
//     "jcn":"<p class='text_p'>这里是提示的信息哦,怎么说呢就是想测试一下，台北阳台换行试下是打死你可哦啊hi好的就餐书搭那看到那些啊开会算了绝对是孔奥打到，哪看来大家拗口</p>"+
//     "<p>这是换行之后的测试一下什么情况</p>",
//     "fcn":"<p>在這個陽光明媚的日子裡，我們用繁體中文寫下什麼意思都沒有的話，這隻是為了更好的測試，讓咱們一起來看看這個對語言的文檔加上VUE出現什麼樣的樣子</p>",
//     "en":"<p>english coin word school icelond wodoubuzhidao ziji zaixie shenm fanzheng jiu kankan jiuhao le hahah zhe shi yinwen de dongxi</p> ",
//   }
let textModel = {
  "jcn":"/Jcn",
  "fcn":"/Fcn",
  "en":"/En",
};
export default {
  name: 'YeTestSkin',
  data () {
    return {
      msg: '哈哈哈这是个测试',
      // message:textDesc["jcn"],
      // onClick:()=>{
      //   // timeout(100).then((value)=>{
      //   //   console.log(value);
      //   // });
      //   this.$router.push({path:"/Test"})
      // },
      onClick:function(type){
        // this.message = textDesc[type];
        this.$router.push({path:textModel[type]});
      }
    }
  },
  
}
// window.onload=function(){
//   document.documentElement.style.fontSize = 10*(document.documentElement.clientWidth/320)+"px";
// }
// window.onresize = function(e){
//   //根据检测得到窗口变化
//   console.log(document.documentElement.clientWidth);
//   console.log(e);
//   document.documentElement.style.fontSize = 10*(document.documentElement.clientWidth/320)+"px";
// }

//  function A(){
//         var funs=[];
//         for(var i=0;i<10;i++){
           
//            funs[i]=(function(){
//               var j = i
//                return function(){
//                  return j;
//                };
//            })();
//         }
//         return funs; 
//     }
//     var funs = A();//定义funs[0]-funs[9]，10个函数
//     console.log(funs[0]());//10
//     console.log(funs[1]());//10
//     console.log(funs[6]());//10

// function Anima(){

//     this.wow = function(){
//       console.log(this.name+"wow");
//     }

// }

// function Dog(name){
//     // Anima.call(this);
//     this.name = name;
//    this.run = function(){
//       console.log(this.name +"run");
//     }
// }
// Dog.prototype = new Anima();
// var dog = new Dog("哈哈");
// dog.run();
// dog.wow();

// var now = new Date();
// function timeDate(time){
//     var a = new Date();
//     var year = a.getFullYear(time);
//     var month = a.getMonth(time)+1;
//     var day = a.getDate(time);
//     var monthStr = month>9?month:"0"+month;
//     var dayStr = day>9?day:"0"+day;
//     return year+"_"+monthStr+"_"+dayStr;
// }
// console.log(timeDate(now.getTime()));
// var sss = "yyyy_MM_DD";
// var a = /(M+)/.exec(sss);
// console.log(RegExp.$1);
//二分查找算法
function erFen(arr,val){
  //arr必须是一个有序数列
  var low = 0; //查找元素的第一个索引
  var higt = arr.length-1;//查找元素的最后一个索引
  while(low < higt)
  {
    let mid = Math.floor((low+higt)*0.5);
    if(arr[mid] == val)
    {
      return "找到了"+arr[mid];
    }
    else if(arr[mid]>val)
    {
      higt = mid-1;
    }
    else
    {
      low = mid+1;
    }
  }
  return "没有这个元素";

}
var arr = [3,4,5,6,7,8,9,10];
console.log(erFen(arr,9));
// setTimeout(()=>{
//     console.log(1);
// },2000);
// for(var i=0;i<10000;i++){
//     console.log(2);
// }    
// setTimeout(()=>{
//     console.log(3);
// });
// console.log(4);




// let [foo,[a],[b,c]] = [1,[3],[5,6]];
// console.log("a,foo,b,c");
// console.log(a+","+foo+","+b+","+c);

// let str = 'x\uD83D\uDE80y';
// console.log(str.length);
// console.log([...str].length);
// console.log(str.split("").reverse().join());
// console.log([...str].reverse().join());

// let map = new Map([[1,"one"],[2,"two"],[3,"three"]]);
// let arr = [...map.values()];
// console.log(arr.join());

// let go = function*(){
//     yield 1;
//     yield 2;
//     yield 3;
//     // return "ending";
// }

// let gen = go();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function*g(){
//   var o = 1;
//   var a = yield o++;
//   console.log("a=" + a);
//   var b = yield o++;

// }

// let aa = g();
// console.log(aa.next());
// console.log("___________");
// console.log(aa.next(11));
// let arr1 = [{a:1},3,{e:7}]
// let arr = Array.from(arr1);
// console.log(arr);
// console.log(arr1);
// console.log("---------改变之后------------");
// arr[0].a = 8;
// arr[1] = 6;
// console.log(arr);
// console.log(arr1);

// var o = {};
// Object.defineProperty(o,"a",{
//   value :37,
//   writable:true,
//   enumerable : true,
//   configurable:true,
// });
// console.log(o.a);

// var bValue;
// Object.defineProperty(o,"b",{
//     get:function(){
//       return bValue;
//     },
//     set:function(newValue){
//       bValue = newValue;
//     },
//     enumerable : true,
//     configurable : true,
// });
// console.log(o.b);
// o.b = 38;
// console.log(bValue);
// var arr = new Array(1,2,3,4);

// console.log(arr.flatMap(x=>[[x*x]]));




// let a = false;
// const promise = new  Promise(function(resolve,reject){
//   console.log("这里创建了Promise");
//   if(a)
//   {
//     resolve("value");
//   }
//   else
//   {
//     reject("这是一个错误");
//   }
// });
// promise.then(function(value){
//   console.log(value);
// },function(error){
  
//   console.log(error);
// });

// function timeout(ms){
//   return new Promise((resolve,reject)=>{
//     setTimeout(resolve,ms,"done");
//   });
// }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.div_layput{
   display: flex;
   flex-direction: column;
   justify-content: center;
}
.a_layout {
  /* position: absolute; */
 
  /* width: 200;
  height: ; */
  margin:auto;
  /* padding:0 10px; */
}
.text_skin{
  border: 1px solid #dfd0df;
  height: 62vh;
  font-size: 20px;
  word-wrap: break-word;
  text-align: left ;
  text-indent: 40px;
  /* color: #42b983; */
  /* line-height: 30px; */
}


a {
  color: #42b983;
}
</style>
