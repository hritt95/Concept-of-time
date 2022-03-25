const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, sunRise1, sunRise2, dayTime1, dayTime2, sunSet1, sunSet2, night1, night2;
let sec;
let gradiantH;
let radius;
let angle;
let moonAngle;
let speed;
let centerY;
let centerX;



function setup() {
    createCanvas(800, 500);

    // sunrise

    frameRate(1);
    c1 = color(107, 8, 72);
    c2 = color(255, 167, 0);
    sunRise1 = color(107, 8, 72);
    sunRise2 = color(255, 167, 0);
    dayTime1 = color(255);
    dayTime2 = color(63, 191, 191);
    sunSet1 = color(255, 167, 0);
    sunSet2 = color(120, 73, 109);
    night1 = color(0, 39, 70);
    night2 = color(1, 66, 109);

    radius = 300;
    angle = getSunAngle();
    moonAngle = angle + 3.14;
    speed = (6.28/24)/3600;
    centerX = 800 / 2;
    centerY = 500;

    


}
//Calculate starting sun Angle based on current time//
function getSunAngle() {
    let h = hour();
    let m = minute();
    let s = second();
    let minAngle = (6.28/24)/60;
    let secAngle = (minAngle)/60;
    let extraAngle = (minAngle*m)+(secAngle*s);
    switch (h) {
        case 0:
            return 18 * (-6.28 / 24) + extraAngle;
        case 1:
            return 19 * (-6.28 / 24) + extraAngle;
        case 2:
            return 20 * (-6.28 / 24) + extraAngle;
        case 3:
            return 21 * (-6.28 / 24) + extraAngle;
        case 4:
            return 22 * (-6.28 / 24) + extraAngle;
        case 5:
            return 23 * (-6.28 / 24) + extraAngle;
        case 6:
            return 0 + extraAngle;
        case 7:
            return -6.28 / 24 + extraAngle;
        case 8:
            return 2 * (-6.28 / 24) + extraAngle;
        case 9:
            return 3 * (-6.28 / 24) + extraAngle;
        case 10:
            return 4 * (-6.28 / 24) + extraAngle;
        case 11:
            return 5 * (-6.28 / 24) + extraAngle;
        case 12:
            return 6 * (-6.28 / 24) + extraAngle;
        case 13:
            return 7 * (-6.28 / 24) + extraAngle;

        case 14:
            return 8 * (-6.28 / 24) + extraAngle;
        case 15:
            return 9 * (-6.28 / 24) + extraAngle;
        case 16:
            return 10 * (-6.28 / 24) + extraAngle;
        case 17:
            return 11 * (-6.28 / 24) + extraAngle;
        case 18:
            return 12 * (-6.28 / 24) + extraAngle;
        case 19:
            return 13 * (-6.28 / 24) + extraAngle;
        case 20:
            return 14 * (-6.28 / 24) + extraAngle;
        case 21:
            return 15 * (-6.28 / 24) + extraAngle;
        case 22:
            return 16 * (-6.28 / 24) + extraAngle;
        case 23:
            return 17 * (-6.28 / 24) + extraAngle;


    }
}

function draw() {
gradiantH = hour();
    if (gradiantH >= 5 && gradiantH < 8) {
        c1 = sunRise1
        c2 = sunRise2
    } else if (gradiantH >= 8 && gradiantH < 18) {
        c1 = dayTime1
        c2 = dayTime2
    } else if (gradiantH >= 18 && gradiantH < 20) {
        c1 = sunSet1
        c2 = sunSet2
    } else {
        c1 = night1
        c2 = night2
    }
    for (let y = 0; y < height; y++) {
        n = map(y, 0, height, 0, 1);
        let newc = lerpColor(c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    }

    push()
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);

    fill(253, 184, 19);
    ellipse(x, y, 80, 80);
    pop()
    push()
    let moonX = centerX + radius * cos(moonAngle);
    let moonY = centerY + radius * sin(moonAngle);

    fill(244, 246, 240);
    ellipse(moonX, moonY, 80, 80);
    pop()
    angle = angle - speed;
    moonAngle = moonAngle - speed;

}