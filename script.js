let box=document.getElementsByClassName("box");
let info=document.getElementById("write");
let game=document.getElementsByClassName("game")[0];
let line=document.getElementById("line");
let turn="X";
function turnXO(){
    return (turn=="X")?"0":"X";
}
function win(){
    winPos=[
        [0,1,2,5,35,0],
        [3,4,5,15,35,0],
        [6,7,8,25,35,0],
        [0,3,6,15,25,90],
        [1,4,7,15,35,90],
        [2,5,8,15,45,90],
        [0,4,8,15,35,45],
        [2,4,6,15,35,135]
    ];
    winPos.forEach((element,i)=>{
    
        if (box[winPos[i][0]].textContent==box[winPos[i][1]].textContent && box[winPos[i][1]].textContent==box[winPos[i][2]].textContent&&box[winPos[i][0]].textContent==box[winPos[i][2]].textContent && box[winPos[i][0]].textContent!=""){
            turn=turnXO();
            line.style.width="30vw";
            line.style.top=(winPos[i][3]+"vw");
            line.style.left=(winPos[i][4]+"vw");
            line.style.transform=`rotate(${winPos[i][5]+"deg"})`;
            info.innerHTML=`${turn} won!`;
        }
    });
}
Array.from(box).forEach(element => {
    element.addEventListener("click",()=>{
        if(element.innerHTML==""){
            element.innerHTML=turn;
            turn=turnXO();
            info.innerHTML=`Turn for ${turn}`;
        }
        win();
    });
});
let rest=document.getElementById("btn");
rest.addEventListener("click",()=>{
    Array.from(box).forEach(element => {
        element.innerHTML="";
        turn="X";
        info.innerHTML=`Turn for X`;
        game.style.display="grid";
        info.style.fontSize="20px";
        line.style.width="0";
    });
});
