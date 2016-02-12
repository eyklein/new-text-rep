function Heart(xIn, yIn) {
  this.ease = .1;
  
  this.vibrateAmount=1;

  this.xRest = xIn;
  this.yRest = yIn;
  this.diamRest = random(30, 50);

  this.xCurSharp = this.xRest;
  this.yCurSharp = this.yRest;
  this.ZCurSharp = 0;

  this.xCur = this.xRest;
  this.yCur = this.yRest;
  this.zCur = 0;

  this.diamCur = this.diamRest;

  this.shiftWhen = random(40, 60);

  this.runDistFact = 50;

  this.setEase = function() {
    this.distanceMouse() / 10000;
  }
  this.vibrate = function() {

    this.setEase();

    this.xCurSharp = this.xCurSharp + random(-1*this.vibrateAmount, this.vibrateAmount);

    if (abs(this.xCurSharp - this.xRest) > 10) {
      if (this.xCurSharp > this.xRest) { //xCur>bound
        this.xCurSharp -= random(0, 1);
      } else {
        this.xCurSharp += random(0, 1); //xCur< bound
      }
    }
    //print(this.ease)
    this.xCur += (this.xCurSharp - this.xCur) * this.ease;


    this.yCurSharp = this.yCurSharp + random(-1*this.vibrateAmount, this.vibrateAmount);

    if (abs(this.yCurSharp - this.yRest) > 10) {
      if (this.yCurSharp > this.yRest) { //xCur>bound
        this.yCurSharp -= random(0, 1);
      } else {
        this.yCurSharp += random(0, 1); //xCur< bound
      }
    }
    this.yCur += (this.yCurSharp - this.yCur) * this.ease;


  }

  this.display = function() {
    fill(255, 0, 0, 100)
    ellipse(this.xCur, this.yCur, this.diamCur, this.diamCur);
    // ellipse(this.xRest, this.yRest, this.diamCur, this.diamCur);

  }
  this.moveFromMouse = function() {
    this.diamCur = this.diamRest * this.zToScale(this.distanceMouse());
    if (pmouseX != mouseX || pmouseY != mouseY) {

      if (this.distanceMouse() / this.runDistFact < PI) {
        this.xCurSharp = this.xRest + sin(this.distanceMouse() / this.runDistFact) * this.vectorMouseX();

        this.yCurSharp = this.yRest + sin(this.distanceMouse() / this.runDistFact) * this.vectorMouseY();
      }

      this.setEase();

      this.xCur += (this.xCurSharp - this.xCur) * this.ease;
      this.yCur += (this.yCurSharp - this.yCur) * this.ease;
    }

  }


  this.moveQuick = function() {
    //print(this.distanceMouse())
    if (this.distanceMouse() > 100) {
      //print(1)
      var distCenter = dist(this.xRest, this.yRest, canvasWidth / 2, canvasHeight / 2)
        //this.diamCur = this.diamRest * this.zToScale(1000);


      //if (distCenter / this.runDistFact < PI) {

      //}

      this.setEase();


      //this.xCurSharp += (this.xRest - this.xCurSharp);
      this.xCurSharp = this.xRest
      this.xCur += (this.xCurSharp - this.xCur) * this.ease;

      //this.yCurSharp += (this.yRest - this.yCurSharp);
      this.yCurSharp = this.yRest
      this.yCur += (this.yCurSharp - this.yCur) * this.ease
        //this.yCurSharp=this.yCur;
      this.vibrate();
    }


  }
  this.vectorMouseX = function() {
    return (this.xRest - mouseX); //+ or -
  }
  this.vectorMouseY = function() {
    return (this.yRest - mouseY); //+ or -
  }
  this.distanceMouse = function() {
    return dist(this.xRest, this.yRest, mouseX, mouseY);
  }

  this.zToScale = function(zIn) { //scale can be a diam or other nomber to scale the size
    return 100 / (zIn + this.shiftWhen);

  }
}