let text=document.getElementById('text');
let lefttree=document.getElementById('lefttree');
let righttree=document.getElementById('righttree');
let leftgate=document.getElementById('leftgate');
let rightgate=document.getElementById('rightgate');
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    text.style.marginTop=value*2.5+'px';
    lefttree.style.left=-value*1.5+'px';
    righttree.style.right=-value*1.5+'px';
    leftgate.style.left=-value*0.5+'px';
    rightgate.style.right=-value*0.5+'px';
});