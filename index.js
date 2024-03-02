var object=document.getElementById('car-drive')
var image=document.getElementById('image-plane')
var printing=document.getElementById('score-print')
var over=document.getElementById('over')
var btn=document.getElementById('play-again')
let [movingleft,movingtop,game]=[0,0,true]
var score=0
var checkbox=0
console.log(window.innerWidth)
window.addEventListener('keydown',(event)=>{
    if(checkbox!=0){
let key=event.key
if(game){
    // if(key=="F5"){
    //     event.preventDefault()
    //     console.log('l')
    // }
// if(document.getElementById('text').innerHTML!="Stop")
if(key=='ArrowRight'){
    if(document.getElementById('text').innerHTML=="Stop")
    game=false
if(movingleft<window.innerWidth-200){
    movingleft+=20
    score++
}
object.style.marginLeft=`${movingleft}px`
console.log(movingleft)

}
else if(key=='ArrowLeft'){
    if(movingleft>0)
    movingleft-=20
    object.style.marginLeft=`${movingleft}px`
score++

    }
else if(key=='ArrowUp'){
    if(movingtop>0){
        movingtop-=20
    score++       
    }
    object.style.marginTop=`${movingtop}px`
    console.log(movingtop)
    }
else if(key=='ArrowDown'){
    if(movingtop<window.innerHeight-200){
           movingtop+=20
   score++
    }
 
            object.style.marginTop=`${movingtop}px`


            }
        
    }

    else{
        checkbox=1
        over.style.display='inline-block'
        printing.innerHTML=score
        image.style.display='none'
    }
    document.getElementById('score').innerText=score    } 
})
// var movings=object.style.marginLeft
// for(let i=0;i<10;i++){
//     console.log(movings)
//     moving+=20
// }

function change(){
    var color=""
    var text=""
    if(document.getElementById('mode1').style.background=="rgb(7, 239, 7)"){
    color="rgb(239, 61, 7)"
    text="Stop"
}
else{
color="rgb(7, 239, 7)"
text="Go!"
}
document.getElementById('mode1').style.background=color
document.getElementById('mode2').style.background=color
document.getElementById('mode3').style.background=color
document.getElementById('text').innerHTML=text
document.getElementById('text').style.color=color

}
setInterval(change,2000)
setTimeout(()=>{
    checkbox=1
    document.getElementById('others').style.opacity=1
    document.getElementById('checkbox').style.display='none'
},1000)


// function for restarting the game
btn.addEventListener('click',()=>{
    window.location.reload()
})