import lib from '@es/index'

// import resetCss from '@styles/reset.css'
// import mainCss from './style.css'

// function func(uname,age){
//     console.log(uname,age);
// }

// func('shangyy',18)

// console.info(lib)
// // console.info(resetCss)
// console.info(mainCss)
let str='123456';
console.time('1')
console.log(str.repeat(100000))
console.timeEnd('1')

console.time('2')
let str1=''
for(let i=0;i<100000;i++){
    str1+=str;
}
console.log(str1)
console.timeEnd('2')