// loader start
window.addEventListener('load' , ()=>{
  document.querySelector('.mainload').classList.add('loaded');
  document.querySelector('.loader').classList.remove('loader');
  setTimeout(function(){
    document.querySelector('.mainload').classList.add("hidden");
  }, 1000);
})
// loader end







const detailbtn = document.querySelector(".detailbtn");
const modal = document.querySelector(".modal");
const modalclose = document.querySelector(".modalclose");

function show() {
  detailbtn.addEventListener("click", () => {
    modal.classList.add("show");
  });
  modalclose.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}
show();





let likebtn1 = document.querySelector('#like1');
function likeitem1(){
    likebtn1.addEventListener('click' , ()=>{
        document.querySelector('.likeitem1').innerHTML = document.querySelector('.adoptimg1').innerHTML;
    })
}
likeitem1();

let likebtn2 = document.querySelector('#like2');
function likeitem2(){
    likebtn2.addEventListener('click' , ()=>{
        document.querySelector('.likeitem2').innerHTML = document.querySelector('.adoptimg2').innerHTML;
    })
}
likeitem2();




let likebtn3 = document.querySelector('#like3');
function likeitem3(){
    likebtn3.addEventListener('click' , ()=>{
        document.querySelector('.likeitem3').innerHTML = document.querySelector('.adoptimg3').innerHTML;
    })
}
likeitem3();



