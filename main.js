function preload(){
   img = loadImage("dog_cat.jpg")
}

function setup(){
   canvas = createCanvas(600 , 450)
   canvas.center()
}

function draw(){
   image(img , 0 , 0 , 600 , 450)
   fill("red")
   stroke("red")
   textSize(18)
   text("cat" , 330 , 100)
   text("dog" , 100 , 80)
   noFill()
   rect(70 , 60 , 400 , 380)
   rect(270 , 80 , 300 , 350)
}