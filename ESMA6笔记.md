### ES6特性
#### 兼容性
* IE10+、chrome、firefox、移动端、node.js环境可以兼容
##### 兼容办法
1、在线转换
引入babel（browser.js）
2、提前编译  
##### 新特性
* 1、变量
>添加了let和const关键字，弥补了var声明变量的不足，var
可以重复声明，无法限制修改，而let和const很好的解决了这
些问题，let有块级作用域中，不能重复声明，可以修改，
const用于声明常量，有块级作用域，不能重复声明，不能修改。
* 2、函数
>如果只有一个参数，（）可以去掉
>如果函数只有一个return，｛｝可以去掉
>参数扩展（剩余参数处理/收集剩余参数以数组的形式保留下来）
```
 function show (a,b,...args){}
```
>数组展开
>实际形式等同于数组去掉方括号
```
arr=[1,3,5]
function show(a,b,c){
  alert(a);
  alert(b);
  alert(c)
}
show(1,3,5)==show(...arr)
```
>默认参数
>直接在形参里面赋值,传参会覆盖，不传就是默认值
```
function show (a,b=6,c=9){
  console.log(a,b,c)//67,56,9
 }
 show(67,56)
```
* 3、数组

* 4、字符串
* 5、面向对象
* 6、Promise
* 7、generator
* 8、模块化

