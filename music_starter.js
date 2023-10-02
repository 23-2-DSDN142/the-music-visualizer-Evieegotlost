let firstRun = true
let frame;
let vol;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    frame = loadImage('assets/tvframe.png');
    vol = loadImage('assets/volume.png');
    firstRun = false;
  }
  background(23, 0, 92) //blue screen 0, 98, 255
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let ballSize = 40;
   let vocalHeight = map(vocal, 0, 100, 0+ballSize/2, height);

  image(frame, 0, 0);

  console.log(counter);
  if(counter>=2860 && counter<=4300){
    volumebar (vocal);
  }


}

function volumebar(vocal){
  let vocalvol = map(vocal, 0, 100, -10, 40);
  let volheight = 20;
  let volwidth = 70;
  // let volX = 480;
  let volY = 880;
  vol.resize(200,100);
  image(vol, 450, 750);
  noStroke();
  fill(255);

for(let i =1; i <= vocalvol; i++){
  let barstep = i*30;
  rect(barstep+450, volY, volheight, volwidth);
}
}
