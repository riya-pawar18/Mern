const image= document.getElementById("bw");
image.addEventListener("pointerenter",()=> {
    image.setAttribute("src","color.jpg");
});
image.addEventListener("pointerleave",()=>{
    image.setAttribute("src","nocolor.jpg");
});