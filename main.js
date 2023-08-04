let nums =document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let startted =false// function Started ? no





window.onscroll=function(){
    if(window.scrollY >= section.offsetTop){
        if(!startted){
            nums.forEach((num)=>startCount(num) )
        }
        startted=true;

    }
}




function startCount(el){
    let goal= el.dataset.goal;
let count =setInterval(() => {
el.textContent++;
if(el.textContent == goal){
    clearInterval(count)

}
}, 2000 / goal)


}

