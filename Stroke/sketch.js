var strokeArray = [];
var counter = 0;

var swipes = [];
var currentSwipe = 0;

function setup() {
  createCanvas(800, 800)
  angleMode(DEGREES);
  swipes[currentSwipe] = new SwipeShape();

}

function draw() {
  background(200)
  if (mouseIsPressed) {
    //strokeArray.push([mouseX, mouseY, atan((mouseY - pmouseY) / (mouseX - pmouseX))]);
    swipes[currentSwipe].addCurrentPoint();
    //print(swipes[currentSwipe].strokeArray.length)
  } else if (swipes[currentSwipe].strokeArray.length > 1) {
    currentSwipe++
    swipes[currentSwipe] = new SwipeShape();
  }


  for (var i = 0; i < swipes.length; i++) {
    swipes[i].display();
  }

  counter++;



}

function SwipeShape() {
  this.strokeArray = [];
  this.edgesArray=[];

  this.counter = 0;

  this.changePoints = function(arrayIn) {
    arrayMiddlePoints = arrayIn;
  }
  this.addCurrentPoint = function() {
    var angle;

    if (abs(mouseX - pmouseX) > 1 || abs(mouseY - pmouseY) > 1) {

      if ((mouseX - pmouseX) > 1) {
        angle = atan((mouseY - pmouseY) / (mouseX - pmouseX));
      } else if ((mouseX - pmouseX) < 1) {
        angle = 180 + atan((mouseY - pmouseY) / (mouseX - pmouseX));
      } else {

      }
      print(angle + " : " + mouseX + ":" + pmouseX)
      // if (angle > 180) {
      //   angle = angle + 180
      //   ellipse(mouseX, mouseY, 50, 50)
      //   print("***************************")
      // }

      //line(mouseX, mouseY, mouseX + cos(angle + 90) * 100, mouseY + sin(angle + 90) * 100)
      this.strokeArray.push([mouseX, mouseY, angle]);

      //print(angle)
      //print(atan((mouseY - pmouseY) / (mouseX - pmouseX))==null)
      // if (!angle) {
      //   //print("x-px: " + (mouseX - pmouseX) + "   /ty-py: " + (mouseY - pmouseY))
      // }
    }
  }
  this.display = function() {
    noStroke();
    fill(200, 20, 20)

    
    beginShape();

    if (this.strokeArray.length >= 1) {
      for (var i = 0; i < this.strokeArray.length; i++) {
        curveVertex(this.strokeArray[i][0] + cos(this.strokeArray[i][2] + 90) * 10, this.strokeArray[i][1] + sin(this.strokeArray[i][2] + 90) * 10);
      }

      for (var j = this.strokeArray.length - 1; j >= 0; j--) {
        curveVertex(this.strokeArray[j][0] - cos(this.strokeArray[j][2] + 90) * 10, this.strokeArray[j][1] - sin(this.strokeArray[j][2] + 90) * 10);
      }

    }
    endShape(CLOSE);
    this.counter++
  }
}

function keyPressed() {
  // stroke(0);
  // strokeWeight(5);


  //line(strokeArray[i][0], strokeArray[i][1], strokeArray[i + 1][0], strokeArray[i + 1][1]);
}