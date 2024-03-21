var players = [];

function createPlayer (name, token) {
    const userName = name;
    const userToken = token;
    
    return { userName, userToken}
}

document.querySelector('.start-form').addEventListener( 'submit', (e) => {
    e.preventDefault();

    let modal = document.querySelector('.modal');
    let name = document.querySelector('#first-name').value;
    let x = document.querySelector('#x-select').checked;
    let o = document.querySelector('#o-select').checked;
    let p1 = document.querySelector('.p1');
    let cpu = document.querySelector('.cpu');

    if (x === true && o === false) {
        var playerOne = createPlayer(name, 'X');
        var playerTwo = createPlayer('Computer', 'O');
    } else if (x === false && 0 === true) {
        var playerOne = createPlayer(name, 'O');
        var playerTwo = createPlayer('Computer', 'X');
    }

    modal.style.display = 'none';
    p1.innerHTML = playerOne.userName + ': ' + playerOne.userToken;
    cpu.innerHTML = playerTwo.userName + ': ' + playerTwo.userToken;
    players.push(playerOne) && players.push(playerTwo);
});

console.log(players);