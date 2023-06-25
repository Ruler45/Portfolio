
const l1=document.getElementById("l1");
const l2=document.getElementById("l2");
const l3=document.getElementById("l3");
const ham=document.getElementById("ham");
ham.addEventListener("click",()=>{
    l1.classList.toggle("l1active");
    l2.classList.toggle("l2active");
    l3.classList.toggle("l3active");
    document.querySelector('.top').classList.toggle('topgo');
    
});

const cnt=document.querySelectorAll(".container");

document.querySelector('.fa-sun').addEventListener("click", () => {
    setTimeout(() => {
        document.querySelector('.fa-sun').classList.toggle('fa-moon');
    }, 200);
    for(let i=0 ;i<cnt.length;i++){
    cnt[i].classList.toggle("darkcnt");
    }
    document.body.classList.toggle("darkbody");
    // document.querySelector("project").classList.toggle("darkproj");   
    
});
