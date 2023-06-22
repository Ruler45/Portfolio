document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.top').classList.toggle('topgo');
    if (document.querySelector('.top').classList.contains('topgo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 350);
    }


})

const cnt=document.querySelectorAll(".container");

document.querySelector('.fa-sun').addEventListener("click", () => {
    setTimeout(() => {
        document.querySelector('.fa-sun').classList.toggle('fa-moon');
    }, 200);
    for(let i=0 ;i<cnt.length;i++)
    cnt[i].classList.toggle("darkcnt");
    document.body.classList.toggle("darkbody");
    document.querySelector(".project").classList.toggle("darkproj");
    
    
})
