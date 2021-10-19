let angle = 0
let speed=0.5

let hexagonAngle01 = 0;
let hexagonAngle02 = 0;
let hexagonAngle03 = 0;
let hexagonAngle04 = 0;
// let hexagonAngle05 = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  fill(51);

  push();
  translate(150, 435);

  if (hexagonAngle01 < 60) {
    hexagonAngle01 = hexagonAngle01 + 1;
  } else if (hexagonAngle02 < 60) {
    hexagonAngle02 = hexagonAngle02 + 1;
  } else if (hexagonAngle03 < 60) {
    hexagonAngle03 = hexagonAngle03 + 1;
  } else if (hexagonAngle03 < 60) {
    hexagonAngle03 = hexagonAngle03 + 1;
  } else if (hexagonAngle04 < 60) {
    hexagonAngle04 = hexagonAngle04 + 1;
  }
  // } else if (hexagonAngle05 < 60) {
  //   hexagonAngle05 = hexagonAngle05 + 1;




    for (i = 0; i < 5; i++) {
      push();

      translate(0*(i),86*(i*-1));

      rotate(hexagonAngle01);

      HexagonShape();

      pop();
    }




    for (i = 0; i < 5; i++) {
      push();

      translate(0*(i) + 75,86*(i*-1) + 43);

      rotate(hexagonAngle02);

      HexagonShape();

      pop();
    }

    for (i = 0; i < 5; i++) {
      push();

      translate(0*(i) + 150,86*(i*-1));

      rotate(hexagonAngle03);

      HexagonShape();

      pop();
    }



    for (i = 0; i < 5; i++) {
      push();

      translate(0*(i) + 225,86*(i*-1) + 43);

      rotate(hexagonAngle04);

      HexagonShape();

      pop();
    }


    // for (i = 0; i < 5; i++) {
    //   push();
    //
    //   translate(0*(i) + 300,86*(i*-1));
    //
    //   rotate(hexagonAngle05);
    //
    //   HexagonShape();
    //
    //   pop();
    // }



    pop();


    let rotateCenterX = 300;
    let rotateCenterY = 300;

  }




  function HexagonShape() {
    push();
    translate(-150, -100);
    line(125, 57, 175, 57);
    line(175, 57, 200, 100);
    line(200, 100, 175, 143);
    line(175, 143, 125, 143);
    line(125, 143, 100, 100);
    line(100, 100, 125, 57);

    circle(125, 57, 10);
    circle(175, 57,10);
    circle(100, 100, 10);
    circle(125, 143, 10);
    circle(175, 143, 10);
    circle(200, 100, 10);
    pop();
  }
// }
