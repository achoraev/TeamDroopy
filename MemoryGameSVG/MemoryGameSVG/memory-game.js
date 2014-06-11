﻿var memoryArray = [
   'red', 'red', 'blue', 'blue', 'gray', 'gray', 'green', 'green', 'yellow', 'yellow', 'purple', 'purple', 'orange', 'orange',
   'pink', 'pink', 'greenyellow', 'greenyellow', 'darkblue', 'darkblue', 'brown', 'brown', 'cyan', 'cyan'];

var redrawn = [];
var arr = [];

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
        fill: "url('/images/teleriklogo.png')"
    });
}

function initialize() {
    for (var i = 0; i < 4; i++) {
        var counterX = 110;
        for (var j = 0; j < 6; j++) {
            arr.push(paper.rect(-90 + counterX, -90 + conterY, 110, 110)
                 .attr({
                     fill: "url('/images/teleriklogo.png')"
                 })
                 .click(function () {

                     reDraw(this.id);
                 })
                 );
            counterX += 110;
        }
        conterY += 110;
    }
}