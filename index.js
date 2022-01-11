const randomize=()=>{
    let num=Math.floor(Math.random()*6)+1;
    let img='dice'+num+'.png';
    let src=`images/${img}`
    return [num,src];
}

const body =document.querySelector("body")
const header=document.querySelector("h1")
const img1=document.getElementById('img1')
const img2=document.getElementById('img2')
const [firstNum,src1]=randomize();
const [secondNum,src2]=randomize();
img1.src=src1
img2.setAttribute("src",src2)

if(firstNum>secondNum){
     header.textContent="Player 1 wins"
}else if(firstNum<secondNum){
    header.textContent="Player 2 wins"
}else{
    header.innerHTML='Draw!'
}



