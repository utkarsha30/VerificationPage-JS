const imageContainer = document.getElementsByClassName("flex")[0];
let images = []
for(let i=0;i<5;i++){
   images[i]=document.createElement("img")
   images[i].src=`./images/img${i+1}.jpg`;
   images[i].alt = `images${i+1}`
   imageContainer.appendChild(images[i]);
}
function resetImages(){
   let img = ["img1","img2","img3","img4","img5"]
   
   const show = document.getElementsByClassName("show")[0];
   let arr = [1, 2, 3, 4, 5];
    
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
      show.innerHTML= arr;
   
  
}

