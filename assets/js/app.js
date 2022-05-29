// let div= document.createElement('div')
// div.classList.add('box')
// let heading= document.createElement('h2')
// let headtext= document.createTextNode('Mern stalk')

// let para = document.createTextNode('JS')

// heading.append(headtext)
// heading.style.padding= ('5px 10px')
// heading.classList.add('one')


// div.append(heading)
// div.insertBefore(para, heading)
// document.querySelector('#root').append(div)

// heading.addEventListener('click', ()=>{
//     alert('agree?')
// })


// let start= document.querySelector('#start')
// let reverse= document.getElementById('reverse')
// let h1= document.querySelector('h1')
// let audio1= document.querySelector('#audio1')
// let audio2= document.getElementById('audio2')
// let alert= document.getElementById('alert')
// let ami= document.createElement('audio')
// ami.setAttribute('src',"./assets/sound/audio2.wav")
// document.querySelector('.root').append(ami)
// ami.classList.add('raz')

// h1.style.fontSize= '60px'
// h1.style.fontWeight= '900'

// let stoptime='';
// let count= 0;
// start.onclick= ()=>{
//     stoptime= setInterval(() => {
//     count++
//     h1.innerHTML= count;
//     audio1.play()
//     if (count==10) {
//         clearInterval(stoptime)
//         count= 0;
//         alert.innerHTML= 'আর ন চাপিস, এদ্দুরুত থাম!'
//         alert.style.fontSize= '30px'
        
        
//     }
//     else{
//         alert.innerHTML= ""
//     }
//     }, 500);
    
// }

// reverse.addEventListener('click',()=>{
//     clearInterval(stoptime)
//     ami.play()
//     count=0;
//     h1.innerHTML= count;
//     alert.innerHTML= 'আবার শুরু গর।'
//     alert.style.fontSize= '30px'

// })


// let count= 0;
// start.onclick= ()=>{
//    count++;
//     if (count<=10) {
//         h1.innerHTML= count;
//         alert.innerHTML= '';
         
//     } else {
//         count= 10;
//         audio1.play()
//         alert.innerHTML= 'stop man!'
//         alert.style.color= 'green'
//         alert.style.fontSize= '30px'
//         alert.style.textTransform= 'uppercase'
    
//     }
// }
// reverse.onclick= ()=>{

//     count--;
//     if (count>=0) {
//         h1.innerHTML= count;
//         alert.innerHTML= ""
        
//     } else {
//         count= 0;
//         alert.innerHTML= `You can't go more down!`
//         alert.style.color= 'red'
//         alert.style.fontSize= '30px'
//         alert.style.textTransform= 'lowercase'
//         ami.play()
        
//     }
// }


let h1= document.querySelector('.cus h1')
let on= document.querySelector('#on')
let off= document.getElementById('off')
let switchoff= document.querySelector('#switchoff')
let switchon= document.createElement('img')
switchon.setAttribute('src','./assets/images/pic_bulbon.gif')
on.style.fontWeight= '700'
off.style.fontWeight= '700'
on.onclick = ()=>{
    switchoff.replaceWith(switchon)
}

off.onclick= ()=>{
    switchon.replaceWith(switchoff)
}




for (let i = 0;  i <h1.children.length; i++) {
   if (h1.children[0].innerHTML !=='ame') {
        h1.children[0].innerHTML= 'sdfd '
   }
}
 