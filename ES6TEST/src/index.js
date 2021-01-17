// var定义全局变量
// var a=2;
// {
//     leta=3;
// }
// console.log(a);

// 进行for循环
// for(var i=0;i<10;i++){
//     console.log("循环体中"+i);
// }

// 数组的解构赋值
// let [a,b,c,d]=[1,2,3];
// console.log(a);
// // 因为let[3]对应的位置没有值所以的输出的为undefined
// console.log(d);

// let[a,b='zb']=['zengbiao',undefined];
// console.log(a+b);

// 对象的解构赋值
// let {foo,bar}={bar:'五莲',foo:'绝世'};
// console.log(foo+bar);

// let foo;
// ({foo}={foo:'正确'});//这里一定要加一个括号
// console.log(foo);

// 常量的定义,a,b,c,d,e分别对应字符串的一个字母
// const [a,b,c,d,e]='zengbiao';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 扩展运算符...arg
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//     console.log(arg[4]);
// }
// taiji(1,2,3,4);

// let arr1=['xf','xz','xh'];
// let arr2=arr1;//更改arr2时会污染arr1
// let arr3=[...arr1]//保护arr1数组
// arr2.push('ttt');
// console.log('arr1='+arr1);
// console.log('arr2='+arr2);
// console.log('arr3='+arr3);

// 剩余运算符rest...
// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// 如何循环输出rest运算符
// function taiji(first,two,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6);

// ({foo}={foo:zengBiao});
// console.log(foo);   
// function taiji(...arg){

//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// function taiji(frist,...arg){
//     for (let val of arg) {
//         console.log(val);
//     }
// }
// taiji(1,2,3,4,5,6,7,8,9);

// ES字符串拼接
// let a='不要惹我';
// let b=`<b>我们这边很多人</b>${a}`;
// document.write(b);

// 查找第一次出现i的下标索引
// let i='i';
// let blog="avhxgkiihkk";
// document.write(blog.indexOf(i));
// ES6直接用includes就可以判断字符串是否存在i
// document.write(blog.includes(i));
// 判断开头是否存在i
// document.write(blog.startsWith(i));
//判断结尾是否存在i
// document.write(blog.endsWith(i));
//复制字串
// document.write('*'.repeat(10))//复制10个*

// ES6进行数字操作以及数字的验证
// let a=11/4;
//ES6判断是否为数字
// console.log(Number.isFinite(a));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5进行数字验证 区别：ES6更加严谨,只有NaN
// let a=11/5;
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN(100+'2'));
// console.log(isNaN({}));
// console.log(isNaN('2'));

// let a=981.1;
// console.log(Number.isInteger(a));//判断；是否为整数
// console.log(Number.parseInt(a));//转成整形
// console.log(Number.parseFloat);

//整数的取值范围为2的53次方
// let zb=Math.pow(2,53)-1;
// console.log(zb);
// console.log(Number.MAX_SAFE_INTEGER);//最大安全整数
// console.log(Number.MIN_SAFE_INTEGER);//最小安全整数
// console.log(Number.isSafeInteger(zb));//安全整数判断

// Es新增的数组知识find()实例方法
//箭头函数
// find(参数:1.值,2.索引,3.数组)
// value:表示当前查找的值
// index:表示当前查找的数组索引
// arr:表示当前数组
// let arr=[1,2,3,4,5,6,7,8];
// var v=arr.find((value,index,arr)=>{
//     //返回索引大于4的值
//     return index>4;
// });
// console.log(v);

// findIndex()方法返回索引
// let arr1=[1,2,3,4,5,6,7];
// var i=arr1.findIndex((value)=>value>4);
// console.log(i);

// fill()实例方法：填充(可能覆盖),参数：1.内容 2.开始位置 3.结束位置
// 注意：左闭右开
// let arr=['zb','曾彪','nb','hello'];
// arr.fill('web',1,3);
// console.log(arr);//这里会覆盖掉arr[2]的内容

// filter()数组去重()过滤
// var myArr=[1,2,3,4,5,6,7,8,9,4,5,6,1];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// let json={
//     '0':'zengbiao',
//     '1':'曾彪',
//     '2':'太极学员',
//     length:3
// }
// console.log(json);

// let arr=[1,2,3,4,5,6,7,8];
// var v=arr.find((value,index,arr)=>{
//     return index>4;
// });
// console.log(v);


// let arr=[1,2,3,4,5,6,7,8,4,6];
// var v=arr.find((value,index,arr)=>{
//     return arr.indexof(value)==index;
// });
// console.log(arr.filter((value,index,arr)=>arr.indexOf(value)===index));

// let arr1=['zengbiao','曾彪','太极公司'];
// for(let [index,val]of arr1.entries()){
//     console.log(index+':'+val);
// }

// let arr2=['zengbiao','曾彪','太极公司'];
// let list=arr2.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// ES箭头函数
// 严谨模式'user strict'
// function add(a,b){
//     'user strict'
//     if(a==0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1,2));
// console.log(add.length);

// var add=(a,b=1)=>{
//     console.log('taiji');
//     return a+b;
// }
// console.log(add(1));

// 对象的函数解构
// let json={
//     a:'zb',
//     b:undefined,
//     c:'曾彪'
// }
// function fun({a,b='web',c}){
//     console.log(a,b,c);
// }
// fun(json);

// 数组的函数解构
// let arr=['zb','曾彪','nb'];
// function fun(z,b,d,g){
//     console.log(z,b,d,g);
// }
// fun(...arr);

// in 的用法
// let json={
//     a:'zb',
//     b:'曾彪'
// }//键值对的形式a(key):''(value)
// //判断该json中是否有键为a的属性
// console.log('a'in json);

// 数组判断
// let arr=[,,,];
// console.log(arr.length);//输出3，所以ES5判断不够准确
// // 注意：这里的0指的是数组的下标是否为空
// console.log(0 in arr);//false
// let arr1=['zb'];
// console.log(0 in arr1);//输出true

// // 数组遍历 forEach
// let arr = ['csm','愁死了','fw'];
// arr.forEach((val,index) => console.log(index,val))
// // 数组遍历 filter
// arr.filter(x => console.log(x))
// // 数组遍历 some
// arr.some(x => console.log(x))
// // 数组遍历 map替换
// console.log(arr.map(x => 'web'));

// 数组转成字符串
// let arr = ['csm','愁死了','fw'];
// console.log(arr.toString());
// console.log(arr.join(''));

// 对象
// let name ='zb';
// let skill='web';
// var obj={name,skill};
// console.log(obj);

// key值构建
// let key="skill";
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);


// ===同值相等，isObject严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

// assign合并对象
// let a={a:'zb'};
// let b={b:'曾彪'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol ES6新增的
// let a=new String;
// let b=new Number;
// let c=new Boolean;
// let d=new Array;
// let f=Symbol('zengbiao');
// console.log(typeof(f));
// console.log(f.toString)

// Symbol对象元素的保护作用
// let obj={name:'zb',skill:'web',age:22};
// for(let item in obj){
//     console.log(obj[item]);
// }
// let obj={name:'zb',skill:'web'};
// let age=Symbol();
// obj[age]=18;
// for(let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

// set的声明
// set中不允许出现重复的值
// let setArr=new Set(['zb','曾彪','web','web']);
// console.log(setArr);
// setArr.add('taiji');
// setArr.delete('web');
// console.log(setArr.has('zb'));
//获取的size为去重后的
// console.log(setArr.size);
//循环输出for...of

//利用set进行去重
// let setArr=new Set();
// [2,3,5,7,5,6,3].forEach(x=>setArr.add(x));
// for (let i of setArr) {
//     console.log(i);
// }

//WeakSet的声明，这块有个坑，如果有两个则会输出两遍obj


//map
// let json={
//     name:'zb',
//     shill:'web'
// };
// console.log(json.name);
// var map=new Map();
// map.set(json,'i am');
// console.log(map);
// 根据键获取值
// console.log(map.get(json));
//根据键进行删除指定的值
// console.log(map.delete(json));
// console.log(map);
// clear删除全部的值
// map.clear();
// console.log(map.size);
// 判断是否存在指定的值
// console.log(map.has('zb'));

//map转成数组

//proxy
// let handler={
//     get:function(target,fieldName){
//         if(fieldName==='fullName'){
//             return `${target.firstName} ${target.lastName}`;
//         }

//         return fieldName in target?target
//     }
// }


// let employee={
//     name:'zb',
//     skill:'web'
// }

// const validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError('Age is always an Integer, Please Correct it!');
//             }
//             if(value < 0) {
//                 throw new TypeError('This is insane, a negative age?');
//             }
//         }
//     }
// }; 
// let pr=new Proxy(employee,validator);

// pr.prop=-2;


var pro = new Proxy({
    add:function(val){
        return val+100
    },
    name:'I am zb',
}, {
    // get
    get: function (target, key, property) {
        console.log('come in Get');
        return target[key];
    },
// });
// console.log(pro.name);
//    set
    set: function (target, key, value, recriver) {
        console.log(` setting ${key} = ${value}`);
        return target[key] = value + '222';
    }
//
});
console.log(pro.add(3));
console.log(pro.name);
pro.name = '曾彪'
console.log(pro.name); 
