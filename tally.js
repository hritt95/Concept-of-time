let clicks;
function setup(){
    createCanvas(displayWidth, displayHeight);
    background(169, 209, 212);  
    clicks = 0;
    
  }
  function mouseClicked(){
    clicks +=1;
    console.log("clicks", clicks);
    let lineCount = 0;
    stroke (28,128,128);
    strokeWeight(5);
    for(let y = 40; y <height-40; y += 40){
      for(let x = 50; x < 350; x += 10){
        if(lineCount<clicks){
          lineCount+=1
          console.log("lineCounts",lineCount);
          if(lineCount % 5 == 0){
            console.log("group5");
            line(x-50,y+20,x,y)
          }else{
            console.log("nonGroup");
            line(x,y,x,y+20)
          }
        }
      }
    }
  }
  function keyPressed(){
    clear();
    clicks = 0;
    background(169, 209, 212);    
  }
  
  function draw(){
   
    
   
  }
  