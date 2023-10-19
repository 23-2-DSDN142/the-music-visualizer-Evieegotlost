let firstRun = true;
let frame;
let vol;
let errortab;
let scanlines;
let eyeopen = [];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    frame = loadImage('assets/tvframe.png');
    vol = loadImage('assets/volume.png');
    errortab = loadImage('assets/errortest.png');
    scanlines = loadImage('assets/scanlines.png');
    eyeopen.push(loadImage('assets/eye/eye_0.png'));
    eyeopen.push(loadImage('assets/eye/eye_1.png'));
    eyeopen.push(loadImage('assets/eye/eye_2.png'));
    eyeopen.push(loadImage('assets/eye/eye_3.png'));
    eyeopen.push(loadImage('assets/eye/eye_4.png'));
    firstRun = false;
  }


  background(23, 0, 92) //blue screen 0, 98, 255
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  image(scanlines, 0, 0);
  image(frame, 0, 0);
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   let ballSize = 40;
   let vocalHeight = map(vocal, 0, 100, 0+ballSize/2, height);


   function BSOD(){
   fill(255);
   textSize(25);
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


  console.log(counter);
  if(counter>=2860 && counter<=4300 || 
    counter>=7200 && counter<=9300){
    volumebar (vocal);
  }

  if(counter>=7140 && counter<=7190){
    background("#0000aa");
    BSOD();
  }

  if(counter>=7140 && counter<=7190){
  
  }

  if(counter>=2860 && counter<=4300){
  errortabs();
  }
  


}


let VocalFrame = int(map(vocal, 0, 100, 0, 4));
console.log(VocalFrame);
push();
scale(1);
image(eye[VocalFrame, 100, 100]);
pop();

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

function errortabs(){
  errortab.resize(800,450);
  image(errortab, 0, 0);

}


