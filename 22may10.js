//Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.



const rps = (p1, p2) => {
    const winner = (n) => `Player ${n} won!`
    
    if (p1 === 'rock' && p2 === 'scissors') {
      return winner(1);
    } else if (p1 === 'scissors' && p2 === 'paper') {
      return winner(1);
    } else if (p1 === 'paper' && p2 === 'rock') {
      return winner(1);
    } else if (p2 === 'rock' && p1 === 'scissors') {
      return winner(2);
    } else if (p2 === 'scissors' && p1 === 'paper') {
      return winner(2);
    } else if (p2 === 'paper' && p1 === 'rock') {
      return winner(2);
    } else {
      return 'Draw!'
    }
};