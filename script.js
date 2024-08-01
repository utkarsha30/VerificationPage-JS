const imageContainer = document.getElementsByClassName("flex")[0];
let compareImages = []

const verifyBtn = document.getElementById('verify-btn')
const resetBtn = document.getElementById('reset-btn')
verifyBtn.style.display = "none"; 
resetBtn.style.display = "none"; 

resetImages()

function resetImages(){
    compareImages = []
   imageContainer.innerHTML = ''; 
   show.innerHTML='';
   verifyBtn.style.display = "none";
   let arr = ['img1', 'img2', 'img3', 'img4','img5'];

    
   // Pick a random index to repeat a value
   let repeatIndex = Math.floor(Math.random() * 5);
   let repeatValue = arr[repeatIndex];
   
   // Add the repeated value at the end
   arr.push(repeatValue);
   
   // Shuffle the array to randomize the position of the repeated value
   for (let i = arr.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [arr[i], arr[j]] = [arr[j], arr[i]];
       
   }
  
   showImages(arr)
    
}


function showImages(arr){
   arr.forEach(img=>{
  let image=document.createElement("img")
   image.className=img
   image.addEventListener("click", () => {
      handleImageClick(image);
    });
   imageContainer.appendChild(image);
   })
}
function handleImageClick(image){
   resetBtn.style.display = "block";
   let show = document.getElementById("show")
   if (compareImages.includes(image)) {
      show.innerHTML = "You have pressed the same image twice";
      verifyBtn.style.display = "none"; 
      return;
  }
  compareImages.push(image);
  if(compareImages.length===2){
   verifyBtn.style.display = "block";
  }  
  if(compareImages.length>2){
   verifyBtn.style.display = "none"; 
   let show = document.getElementById("show")
   show.innerHTML = "More than two images are selected "

}
   }

function verifyImages(){
  
      if(compareImages[0].className===compareImages[1].className){
         setTimeout(() => {
            show.innerHTML = "You are a human " 
        }, 1000);
        show.innerHTML = "Verifying... "
      
      }
      else{
         setTimeout(() => {
            show.innerHTML = "We can't verify you as a human "
        }, 1000);
        show.innerHTML = "Verifying... "
 
      }
   
}
