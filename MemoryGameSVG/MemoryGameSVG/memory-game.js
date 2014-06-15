var memoryArray = [
   'red', 'red', 'blue', 'blue', 'gray', 'gray', 'green', 'green', 'yellow', 'yellow', 'purple', 'purple', 'orange', 'orange',
   'pink', 'pink', 'greenyellow', 'greenyellow', 'darkblue', 'darkblue', 'brown', 'brown', '#252525', '#252525'];
var redrawn = [];
var arr = [];
var logo = new Image();
logo.src = "images/teleriklogo.png";

Array.prototype.memoryTileShuffle = function () {
    var i = this.length,
        j,
        temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

function reDraw(id) {
    clickCount++;
    if (clickCount > 2 && redrawn.length === 2) {
        if (redrawn[0] !== redrawn[1]) {
            if (arr[redrawn[0]].attr("fill") === arr[redrawn[1]].attr("fill")) {
                arr[redrawn[0]].click({

                });
                arr[redrawn[1]].click({

                });

                redrawn = [];
                clickCount = 1;
            }
            else {
                for (var i = 0; i < redrawn.length; i++) {
                    backToOriginal(redrawn[i]);
                }
                redrawn = [];
                clickCount = 1;
            }
        }
        else {
            for (var j = 0; j < redrawn.length; j++) {
                backToOriginal(redrawn[j]);
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
        fill: "url('/images/teleriklogo.png')"
    });
}

function initialize() {
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
                 })
                 .click(function () {
                     reDraw(this.id);
                 })
                 );
            context.drawImage(logo,-90 +142+ counterX, -90 +30+ conterY);
            counterX += 120;
        }
        conterY += 120;
    }
}