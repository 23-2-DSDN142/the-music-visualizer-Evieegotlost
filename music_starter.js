let firstRun = true;
let frame;
let vol;
let errortab;
let scanlines;
let painttab;
let eyeopen = [];
let bass_history = [];

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    frame = loadImage('assets/tvframe.png');
    vol = loadImage('assets/volume.png');
    errortab = loadImage('assets/errortest.png');
    scanlines = loadImage('assets/scanlines.png');
    painttab = loadImage('assets/paint.png');
    eyeopen.push(loadImage('assets/eye/eye_0.png'));
    eyeopen.push(loadImage('assets/eye/eye_1.png'));
    eyeopen.push(loadImage('assets/eye/eye_2.png'));
    eyeopen.push(loadImage('assets/eye/eye_3.png'));
    eyeopen.push(loadImage('assets/eye/eye_4.png'));
    eyeopen.push(loadImage('assets/eye/eye_5.png'));
    eyeopen.push(loadImage('assets/eye/eye_6.png'));
    eyeopen.push(loadImage('assets/eye/eye_7.png'));
    eyeopen.push(loadImage('assets/eye/eye_8.png'));
    firstRun = false;
  }


  background(23, 0, 92) //blue screen 0, 98, 255
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);


   let ballSize = 40;
   let vocalHeight = map(vocal, 0, 100, 0+ballSize/2, height);
   add_to_history(bass_history, bass);

   function BSOD(){
   fill(255);
   textSize(25);
   noStroke();
   textFont("Lucida Console");
   text("A problem has been detected and Windows has been shut down to prevent damage to your computer.", 150, 150);
   text("MEMORY_MANAGEMENT", 150, 220);
   text("If this is the first time you've seen this stop error screen,", 150, 290);
   text("restart your computer. if this screen appears again, follow", 150, 320);
   text("these steps:",150, 350);
   text("Check to make sure any new hardware or software is properly installed.", 150, 420);
   text("If this is a new installation, ask your hardware or software manufacturer", 150, 450);
   text("for and Windows updates you might need.", 150, 480);
   text("If problems continue, disable or remove any newly installed hardware", 150, 550);
   text("or software. Disable BIOS memory options such as caching or shadowing.", 150, 580);
   text("If you need to use Safe Mode to remove or disable components, restart", 150, 610);
   text("your computer, press F8 to select Advanced Startup Options, and then", 150, 640);
   text("select Safe Mode.", 150, 670);
   text("Technical information:", 150, 740);
   text("*** STOP: 0x000000FE (0x00000008, 0x000000006, 0x00000009, 0x847075cc)", 150, 810);
   text("Collecting data for crash dump ...", 150, 900);
   text("Initializing disk for crash dump ...", 150, 930);
   text("Beginning dump of physical memory.", 150, 960);
   text("Dumping physical memory to disk:  95", 150, 990);
   }


  if(counter>=7140 && counter<=7190){
    background("#0000aa");
    BSOD();
  }
  
  if(counter>=0 && counter<=7140 ||
     counter>=7190 && counter<=10533){
    eyeblink (drum);
    glitches(other);
  }

 strokeWeight(7);  
  // bass bar is blue
  stroke(252, 3, 227);

  if(counter>=1450 && counter<=2820 ||
    counter>=2830 && counter<=2835||
    counter>=2860 && counter<=4300||
    counter>=4680 && counter<=4700||
    counter>=4720 && counter<=7140||
    counter>=7200 && counter<=9290||
    counter>=9320 && counter<=10200){
   PaintTab();
   draw_history_line(bass_history);
 }



 console.log(counter);
 if(counter>=2860 && counter<=4300 || 
   counter>=7200 && counter<=9290||
   counter>=9320 && counter<=10200){
   volumebar (vocal);
   errortabs(drum);
 }

 if(counter>=0 && counter<=7140 ||
  counter>=7190 && counter<=10200){
 glitches(other);
}

 image(scanlines, 0, 0);
 image(frame, 0, 0);
}

function eyeblink(drum){
let DrumFrame = int(map(drum, 0, 100, -2, 9));
console.log(DrumFrame);
push();
scale(1);
image(eyeopen[DrumFrame], 0, 0);
pop();
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
  fill('#00ff00');

for(let i =1; i <= vocalvol; i++){
  let barstep = i*30; 
  rect(barstep+450, volY, volheight, volwidth);
}

}
function PaintTab(){
 painttab.resize(640,640);
  image(painttab, 1170, 480);
}

function errortabs(drum){
  let drumtab = map(drum, 0, 100, -20, 20);
  errortab.resize(800,450);
  // image(errortab, 0, 0);
  
  for(let i =1; i <= drumtab; i++){
    let tabstep = i*30; 
    image(errortab, tabstep+50, 0);
}
}

function draw_history_line(history) {
  beginShape(LINES);
  for(let i=0; i<history.length; i++) {
    let x = i*0.95;
    let y = map(history[i], 0, 100, height, height/8, true);
    vertex(x+1300, y+380);
  }
  endShape();
}
function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}

function reset_music() {
  bass_history = [];
}

function glitches(other) {
  noStroke();
   fill('#fd00fb');
   rect(200, 200, 5 * other, 120);
   rect(1700, 600, 5 * other, 40);
   rect(250, 930, 8 * other, 25);   
   fill('#00ff00');
   rect(1800, 660, 2 * other, 120);
   rect(30, 690, 5 * other, 25);   
   rect(1700, 50, 6 * other, 120);
   fill('#02feff');
   rect(120, 800, 5 * other, 170);
   rect(1600, 300, 8 * other, 20);

}