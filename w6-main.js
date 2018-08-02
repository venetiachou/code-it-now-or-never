const title = document.getElementById('title');
title.style.color = "#1bcfc9";
title.style.paddingTop = "20px";

let px = 0;

function move(){
  px = px + 20;
  title.style.marginLeft = px + 'px';
  if (px > 1000){
    px = 0;
  }
}

setInterval(move,200)