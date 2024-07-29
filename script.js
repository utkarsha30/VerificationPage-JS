const imageContainer = document.getElementsByClassName("flex")[0];
let images = []
for(let i=0;i<5;i++){
   images[i]=document.createElement("img")
   images[i].src=`./images/img${i+1}.jpg`;
   images[i].alt = `images${i+1}`
   imageContainer.appendChild(images[i]);
}

