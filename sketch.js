//HIIIIIIIIIIIIIII Boooooooo
//can i mess with your code?
var ellipses = [];
var hearts = [];
var c;
var domText;
var canvasWidth = 960;
var canvasHeight = 400;
var col;
var numHearts = 1000;

var inputText;
var refreshButton
var disText = "H! :)";
var timeChage;

//Text

// function preload() {
//   //domText = loadImage("pic/1x1.jpg");
// }
function setup() {

  createCanvas(canvasWidth, canvasHeight)
  domText = createGraphics(canvasWidth, canvasHeight);

  noStroke()
  fill(255, 0, 0);

  var div0 = createDiv();
  //div0

  inputText = createInput(disText);
  inputText.style("font-size", "80px");
  inputText.style("width", "250px");
  inputText.attribute("maxlength", "6"); //not working
  inputText.position(0, canvasHeight)

  //inputText.input(inputChanged); //input not working
inputText.changed(inputChanged);


  //div0.child(inputText)

  refreshButton = createButton("Shuffle");
  refreshButton.position(300, canvasHeight)
  refreshButton.style("width", "100px");
  refreshButton.style("height", "100px");
  refreshButton.mousePressed(repopulateHearts);




}

function inputChanged() {
  //print(inputText.value())
  //print(1)
  if (disText != inputText.value() && inputText.value().length>0) {
    disText = inputText.value()
    setImage();

    repopulateHearts();
  }
  else if (inputText.value().length==0){
    disText="..."
    setImage();

    repopulateHearts();
  }

  //populateHearts();
}


function setImage() {
  domText.background(255); //deffine graphic for pix analisis

  domText.fill(0);
  domText.textSize(300);
  domText.text(disText, 50, 250);
  //image(domText,0,0);
  domText.loadPixels();//do i need to load pixels every refresh how do i stor this in specific vareable
}

function mouseClicked() {
  //repopulateHearts();

  //print(printPixel(mouseX, mouseY))


}

function draw() {
  background(0); //clear background

  setImage();



  if (hearts.length < numHearts) { //instanteate 
    populateHearts();
  }

  fill(255, 0, 0); //set circles to back color
  for (var i = 0; i < numHearts; i++) {
    hearts[i].display();
    hearts[i].vibrate();
    hearts[i].moveFromMouse();
    if (millis() - timeChage < 3000) {
      hearts[i].moveQuick()
    }
  }

  //print(1)
  //domText.textSize(30);
  //domText.text(getPixel(mouseX, mouseY), 0, 20);
  //image(domText, 0, 0)

}

function populateHearts() {
  var i = 0;
  var rX;
  var rY;
  while (i < numHearts) {


    rX = floor(random(canvasWidth));
    rY = floor(random(canvasHeight));

    col = getPixel(rX, rY); //get color to see if it is on the text

    if (col[0] < 1) {
      hearts[i] = new Heart(rX, rY);
      i++;
    }
  }
}

function repopulateHearts() {
  timeChage = millis();
  var i = 0;
  var rX;
  var rY;
  while (i < numHearts) {

    // if (getPixel(hearts[i].xRest, hearts[i].xRest)[0] < 1) {
    //   i++;
    // } else {
    rX = floor(random(canvasWidth));
    rY = floor(random(canvasHeight));

    col = getPixel(rX, rY); //get color to see if it is on the text

    if (col[0] < 1) {
      hearts[i].xRest = rX;
      hearts[i].yRest = rY;

      //hearts[i].ease=1;

      i++;
    }
    //}
  }
}

function getPixel(xIn, yIn) {

  var index = xIn * 4 * pixelDensity + yIn * canvasWidth * 4 * sq(pixelDensity);
  var rgba = [];
  for (var i = 0; i < 4; i++) {
    rgba.push(pixels[index + i]);
  }
  return rgba


}
