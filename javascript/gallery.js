let imagesParent = document.getElementById('image-div');
let bigImg = document.getElementById('big-image');

imagesParent.addEventListener('click', function (e) {

    bigImg.src = e.target.getAttribute('src');
    console.log(e.target)

})

// let images = Array.from(document.getElementsByClassName('small-images'));
// let bigImg = document.getElementById('big-image');


// images.forEach((image,index)=>{

// image.addEventListener('click',function(e){

//     src = this.src;
// console.log('only first event')
// e.stopPropagation()

// })});


// document.addEventListener('click',()=>{

// bigImg.src= src;
// console.log('second event also')


// })


