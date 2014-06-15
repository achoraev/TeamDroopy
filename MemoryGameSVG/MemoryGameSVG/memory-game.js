var memoryArray = [
   'red', 'red', 'blue', 'blue', 'gray', 'gray', 'green', 'green', 'yellow', 'yellow', 'purple', 'purple', 'orange', 'orange',
   'pink', 'pink', 'greenyellow', 'greenyellow', 'darkblue', 'darkblue', 'brown', 'brown', 'cyan', 'cyan'];

var redrawn = [];
var arr = [];
<<<<<<< HEAD
var posArr = [];

var logo = new Image();
logo.src = "images/teleriklogo1.png";
var xOffset = 0,
     xIncr = 0;

=======
var logo = new Image();
logo.src = "images/teleriklogo.png";
>>>>>>> 5855bd9f7b547df5b3d796c9c388469dc72f5c68

Array.prototype.memoryTileShuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

function reDraw(id) {
    clickCount++;
    if (clickCount > 2 && redrawn.length == 2) {
        if (redrawn[0] != redrawn[1]) {
            if (arr[redrawn[0]].attr("fill") == arr[redrawn[1]].attr("fill")) {
                arr[redrawn[0]].click({

                });
                arr[redrawn[1]].click({

                });
                //doTimer("scale_decr()");
                redrawn = [];
                clickCount = 1;
            }
            else {
                for (var i = 0; i < redrawn.length; i++) {
                    backToOriginal(redrawn[i]);
                    doTimer("scaleDecr()");
                }
                redrawn = [];
                clickCount = 1;
            }
        }
        else {
            for (var i = 0; i < redrawn.length; i++) {
                backToOriginal(redrawn[i]);
                
            }
            redrawn = [];
            clickCount = 1;
        }
    }
    redrawn.push(id);

    arr[id].attr({
        fill: memoryArray[id]
    });
}

function backToOriginal(id) {
    arr[id].attr({
        fill: "url('/images/teleriklogo1.png')"
    });
}

function initialize() {
<<<<<<< HEAD
    for (var i = 0; i < 4; i++) {
        var counterX = 120;
        for (var j = 0; j < 6; j++) {
            arr.push(paper.rect( -90 + counterX, -90 + conterY, 110, 110)
                 .attr({
                     fill: "url('/images/teleriklogo1.png')",
                     //stroke:"yellow",
                     //"stroke-width":4,
                     //"stroke-linejoin": 'round',
=======
    var counterX,
        rows = 4,
        cols = 6,
        i,
        j;
    for (i = 0; i < rows; i++) {
        counterX = 110;
        for (j = 0; j < cols; j++) {
            arr.push(paper.rect(-90 + counterX, -90 + conterY, 110, 110)
                 .attr({
                     fill: "url('/images/teleriklogo.png')",
					 stroke:"yellow",
					 "stroke-width":4
>>>>>>> 5855bd9f7b547df5b3d796c9c388469dc72f5c68
                 })
                 .click(function () {
                     reDraw(this.id);
                 })
<<<<<<< HEAD
            );
            context.drawImage(logo, -90 + 142 + counterX, -90 + 30 + conterY);
=======
                 );
            context.drawImage(logo,-90 +142+ counterX, -90 +30+ conterY);
>>>>>>> 5855bd9f7b547df5b3d796c9c388469dc72f5c68
            counterX += 120;
        }
        conterY += 120;
    }
}
<<<<<<< HEAD

function scaleDecr() {
    context.clearRect(0, 0, logo.width, logo.height);
    context.drawImage(logo, 10, 10, logo.width - xOffset, 100);
    xOffset = xOffset + 10;
    if (xOffset >= logo.width)
        stopTimer();
}

function scaleIncr() {
    context.clearRect(-10, -10, logo.width, logo.height);
    context.drawImage(logo, 10, 10, xOffset + xIncr, 100);
    xIncr = xIncr + 10;
    if (xIncr >= logo.width)
        stopTimer();
}

function doTimer(funct) {
    x_pos = 0;
    timerID = setInterval(funct, 50);
}

function stopTimer() {
    clearInterval(timerID);
}
=======
>>>>>>> 5855bd9f7b547df5b3d796c9c388469dc72f5c68
