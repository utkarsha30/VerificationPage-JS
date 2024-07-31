const imageContainer = document.getElementsByClassName("flex")[0];


resetImages()

function resetImages(){
   imageContainer.innerHTML = ''; 
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
   image.src=`./images/${img}.jpg`
   imageContainer.appendChild(image);
   })
}

