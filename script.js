// let options ={
// 	width:1024,
// 	height:2014,
// 	name:"test"
// }
// console.log(options.name);
// options.bool=false;
// options.color={
// 	border:"black",
// 	bg:"red"
// };
// delete options.bool;
// console.log(options);

// for (let key in options){
// 	console.log('Свойство ' + key + ' имеет значение' + options[key]);
// }
// console.log(Object.keys(options).length);

// let arr= ["first",2,3,"four",5];
// //  for (i=0; i<arr.length; i++){
// // 	console.log(arr[i])
// //  }
// let arr =[1,2,3,4,5,6];
// arr.forEach(function(item,i,mass){
// 	console.log(i+ ': ' + item +"(массив:" +mass+')');
// })


// console.log(arr)

// let mass = [1,2,3,4,5];
//  for( let key of mass){
//   console.log(key)
//  }

// let ans=prompt("","")
// arr=[];
// arr=ans.split(',');
// console.log(arr)
//  let arr=["aere","defe","feef","fefe"];
//   i=arr.join(', ');
//   console.log(arr)
// let arr=[1,15,4];

i=arr.sort(compareNaN);
function compareNaN(a,b){
	return a-b;
}
console.log(arr)

let solder={
	health:400,
	armor:100
}
 let Jone={
	health:100,
 }

 Jone.__proto__=solder;
 console.log(Jone);
 console.log(Jone.armor);