window.addEventListener("load" , ()=>{
    let name = document.querySelector(".name");
    let intro = document.querySelector(".intro-loader");

    setTimeout(()=>{
        name.style.opacity='1'
        name.style.transform ="translateY(0)"
    },300)

    setTimeout(()=>{
        intro.style.top= "-100%"
    },2000)
})