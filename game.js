let bar;
let ac=true;
let flag=1;
let flag_1=1;
let flag_2=1;
let flag_3=1;
let intervalID

document.getElementById('st').onclick=function(){
    document.getElementById('num').textContent=null;
    console.log(ac);
     function simulateButtonClick() {
        if(ac){
            document.getElementById("st").click();
        }
        
    }
    
    intervalID = setInterval(simulateButtonClick, 2000);
for (let i = 0; i < 1; i++) {
    if (flag==1) {
        let listItem = document.createElement('p');
listItem.textContent ="stone";
document.getElementById('num').appendChild(listItem);
        flag=0;
        break;
    }
    if (flag_1==1) {
        let listItem = document.createElement('p');
listItem.textContent = "paper";
document.getElementById('num').appendChild(listItem);
        flag_1=0;
        break;
    }
    if (flag_2==1) {
        let listItem = document.createElement('p');
listItem.textContent = "scissor";
document.getElementById('num').appendChild(listItem);
        flag_2=0;
       break;
    }
    if(flag_3==1){
        let listItem = document.createElement('p');
        listItem.textContent = "scissor";
        document.getElementById('num').appendChild(listItem);
                flag_3=0;
               break;
    }
    console.log(flag);
    console.log(flag_1);
    console.log(flag_2);
    ac=false;
   

}
}
