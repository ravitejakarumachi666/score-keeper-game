const p1display=document.querySelector('#playerone');
const p2display=document.querySelector('#playertwo');
const p1button=document.querySelector('#playeronebutton');
const p2button=document.querySelector('#playertwobutton');
const resetbtn=document.querySelector('#reset');
const choosing=document.querySelector('#choose');
let p1score=0;
let p2score=0;
let winningscore=5;
let isGameOver=false;
choosing.addEventListener('change',function(){
    winningscore=parseInt(this.value);
})

p1button.addEventListener('click',function(){
  if(!isGameOver){
      p1score+=1;
      p1display.textContent=p1score;
      if(p1score==winningscore){
          isGameOver=true;
          p1display.style.color='green';
          p2display.style.color='red';
      }
  }
})

p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2score+=1;
        p2display.textContent=p2score;
        if(p2score==winningscore){
            isGameOver=true;
            p2display.style.color='green';
            p1display.style.color='red';
        }
    }
  })
  resetbtn.addEventListener('click',function(){
      isGameOver=false;
      p1display.textContent=0;
      p2display.textContent=0;
      p1score=0;
      p2score=0;
      p1display.style.color='black';
      p2display.style.color='black';
  })

