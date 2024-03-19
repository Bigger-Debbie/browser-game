const gameBoard = (function () {
    let topRow = [1,2,3];
    let midRow = [4,5,6];
    let btmRow = [7,8,9]; 

    function draw() {
        console.log(topRow);
        console.log(midRow);
        console.log(btmRow);
    }

    function update(move, token) {
        if (move >= 1 && move <= 3) {
            index = move - 1;
            topRow[index] = token;
        } else if (move >= 4 && move <= 6) {
            index = move - 4;
            midRow[index] = token;
        } else if (move >= 7 && move <= 9) {
            index = move - 7;
            btmRow[index] = token;
        }
    }

    return { draw, update };
})();