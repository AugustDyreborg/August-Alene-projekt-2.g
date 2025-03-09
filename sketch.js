let startarmX, startarmY;
let armradius = 100;
let kastedesten = [];
let g = 0.0982; //tyngdeacceleration

function preload() {
    baggrund = loadImage('baggrund.png');
}

function setup() {
    createCanvas(1800, 900);

    startarmX = 200;
    startarmY = 550;
}

function draw() {
    background(baggrund);

    strokeWeight(10);
    line(200, 700, 250, 870); //højre ben
    line(200, 700, 150, 870); //venstre ben 
    line(200, 500, 200, 700); //krop
    fill(255, 191, 117);
    circle(200, 450, 150); //hoved

    //selve armen!!
    let armvinkelen = atan2(mouseY - startarmY, mouseX - startarmX) // atan2 = arctan for et givet punkt
    let armbevægelseX = startarmX + armradius * cos(armvinkelen) // punktet jeg vil bruge til projektilbevægelse og punkt
    let armbevægelseY = startarmY + armradius * sin(armvinkelen) // samme som over

    line(startarmX, startarmY, armbevægelseX, armbevægelseY)

    //sten
    for (let i = kastedesten.length - 1; i >= 0; i--) { // starter fra sidste element og går baglæns
        let s = kastedesten[i];

        s.x += s.vx; // bevægelse i x-retning
        s.y += s.vy; // bevægelse i y-retning
        s.vy += g; // fordi y bliver påvirket af tyngdekraft

        fill("gray") // grå (haha)
        circle(s.x, s.y, 15) // stenen tegnes

        //fjerne sten hvis den ryger ud af mappet
        if (s.y > 850) {
            kastedesten.splice(i, 1); 
        }
    }
}

function keyPressed() {
    if (key === " ") { //space
        let armvinkelen = atan2(mouseY - startarmY, mouseX - startarmX);
        let v0 = 8; //starthastighed
        kastedesten.push({
            x: startarmX + armradius * cos(armvinkelen),
            y: startarmY + armradius * sin(armvinkelen),
            vx: v0 * cos(armvinkelen),
            vy: v0 * sin(armvinkelen),
        });
    }
}
