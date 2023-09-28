let firstRun = true
let frame;
let vol;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    frame = loadImage('tvframe.png');
    vol = loadImage('volume.png');
    firstRun = false;
  }
  background(0, 98, 255)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let ballSize = 40;
   let vocalHeight = map(vocal, 0, 100, 0+ballSize/2, height);

   fill(255);
   ellipse(width/2, vocalHeight, ballSize);

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

  image(frame, 0, 0);

    //volume bar
    let vocalvol = map(vocal, 0, 100, 30, 90);
    let volheight = 20;
    let volwidth = 70;
    let volX = 480;
    let volY = 880;
    image(vol, 450, 750);
    vol.resize(200,100);
    noStroke();
    fill(255);
    rect(volX, volY, volheight, volwidth);
}
