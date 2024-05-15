let a=document.getElementById('color')
let b=document.getElementById('p')
let c=document.getElementById('in')
let d=document.getElementById('h')

a.addEventListener('input',()=>{
    c.style.background=a.value

    b.innerHTML=`colors value= ${a.value}`
    b.style.color='black'
    d.style.color=a.value
   

})