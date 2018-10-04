// console.log(global);
name = 'zfpx';
console.log(global.name);
var timer = setTimeout(function(){
    console.log(new Date().toLocaleString())
},1000);