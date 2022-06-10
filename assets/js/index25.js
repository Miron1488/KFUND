// 1

// let style = ["Джаз", "Блюз"]
// style.shift()
// style.push("Рок-н-рол")
// style.unshift("Рэп", "Регги")
// style[Math.floor((style.length)/2)]="Класика"
// console.log(style)

// ------------------------------------------------------

// ---------------------------------------------------------
// // RABOTA 3
// ---------------------------------------------------------

// 1

// let arr=[1,2,3]
// console.log(arr)

// 2

// let arr=["1","2","3"]
// alert(arr)

// 3

// let arr=['a','b','c','d']
// console.log(arr[0]+"+"+arr[1], arr[2]+"+"+arr[3])

// 4

// let arr=[2,5,3,9]
// let umn1=arr[0]*arr[1]
// let umn2=arr[2]*arr[3]
// let sum=umn1+umn2
// console.log(sum)

// 5

// let obj={a:1, b:2, c:3}
// console.log(obj["c"])

// 6

// let obj={Коля:'1000', Вася:'500', Петя:'200'}
// console.log(obj["Петя"])
// console.log(obj["Коля"])

// 7

// let obj={1:"Пн", 2:"Вт", 3:"Ср", 4:"Чт", 5:"Пт", 6:"Сб", 7:"Вс"}
// console.log(obj[3])

// 8

// let obj={1:"Пн", 2:"Вт", 3:"Ср", 4:"Чт", 5:"Пт", 6:"Сб", 7:"Вс"}
// let day=(obj[3])
// console.log(day)

// 9

// let mas=[[1, 2, 3],[4, 5, 6],[7,8,9]]
// console.log(mas[1][0])

// 10

// let obj={js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(obj["js"][0])

// 11

// let mas={ru:["Пн", "Вт", "Ср"], en:["Mon", "Tue", "Wed"]}
// console.log(mas["ru"][0] + mas["en"][2])

// ---------------------------------------------------------------
// RABOTA 5
// ---------------------------------------------------------------

// 1

// let i=1
// for (let i = 1; i <= 100; i++) {
//    console.log(i)  
// }

// let i=0
// while(i<100){
//     i++
//     console.log(i)
// }

// 2

// let i=1
// for (let i = 11; i <= 33; i++) {
//    console.log(i)  
// }

// let i=10
// while(i<33){
//     i++
//     console.log(i)
// }

// 3

// let i=0
// while(i<100){
//     i+=2
//     console.log(i)
// }

// let i=1
// for (let i = 0; i <= 100; i+=2) {
//    console.log(i)  
// }

// 4

// let sum=0
// for (let i = 0; i <= 100; i++) {
//     sum+=i
//     console.log(sum)  
// }

// ----------------------------------------------
// CANVAS 
// ----------------------------------------------

document.querySelector('.btn-create').onclick = createcanvas
function createcanvas(){
    let wd=document.querySelector('.inputwidth').value
    let hd=document.querySelector('.inputhight').value
    let col=document.querySelector('.inputcolor').value
    let canvv=document.querySelector('#canv')
    canvv.style.cssText=`background-color: ${col}; width: ${wd}px; height: ${hd}px;`
}

document.querySelector('.clear').onclick=clear
function clear(){
    let canvv=document.querySelector('#canv')
    canvv.style.cssText=`background-color: white; width: 0px; height: 0px;`
}

let left=0
document.querySelector('.btn-left').onclick=btnleft
function btnleft(){
    left+=10
    let canvv=document.querySelector('#canv')
    canvv.style.position=`relative`
    canvv.style.right=`${left}px`
}

document.querySelector('.btn-right').onclick=btnright
function btnright(){
    left-=10
    let canvv=document.querySelector('#canv')
    canvv.style.position=`relative`
    canvv.style.right=`${left}px`
}

let topp=0
document.querySelector('.btn-top').onclick=btntopp
function btntopp(){
    topp+=10
    let canvv=document.querySelector('#canv')
    canvv.style.position=`relative`
    canvv.style.bottom=`${topp}px`
}

document.querySelector('.btn-down').onclick=btndown
function btndown(){
    topp-=10
    let canvv=document.querySelector('#canv')
    canvv.style.position=`relative`
    canvv.style.bottom=`${topp}px`
}

document.querySelector('.donttuch').onclick=warning
function warning(){
    let i = 10000
    while(i>0){
        i**=10000
        console.log(i)
    }
    let a = 10000
    while(i>0){
        a**=10000
        console.log(i)
    }
    let b = 10000
    while(i>0){
        b**=10000
        console.log(i)
    }
    let c = 10000
    while(i>0){
        c**=10000
        console.log(i)
    }
}




