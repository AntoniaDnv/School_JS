document.addEventListener('DOMContentLoaded', () => {

    const gameContainer = document.createElement('div');
    gameContainer.className = 'gameContainer';

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';
    scoreDiv.textContent = 'Score: 0';

    const canvas = document.createElement('canvas');
    canvas.width = 420;
    canvas.height = 420;
    canvas.setAttribute('tabindex', '0');

    const resetBtn = document.createElement('button');
    resetBtn.className = 'resetBtn';
    resetBtn.textContent = 'Reset';

    const startScreen = document.createElement('div');
    startScreen.className = 'startScreen';
    startScreen.textContent = 'TAB / CLICK TO PLAY';

    gameContainer.append(scoreDiv, canvas, resetBtn);
    document.body.append(gameContainer, startScreen);

    const ctx = canvas.getContext('2d');

    const box = 20;
    let snake, food, direction, score, gameInterval;

    resetGame();
  startScreen.setAttribute('tabindex', '0');
    startScreen.focus();
   
    startScreen.addEventListener('click', startGame);
    startScreen.addEventListener('keydown', (ev) => {
      if (ev.key === 'Space' || ev.key === 'Enter') {
        startGame();
      }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') 
          {
            startGame();
          }
    });

    document.addEventListener('keydown', changeDirection);

    resetBtn.addEventListener('click', resetGame);
    resetBtn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') 
          {
            resetGame();
          }
    });

    

    function startGame() {
        startScreen.style.display = 'none';
        canvas.focus();
        gameInterval = setInterval(draw, 180); 
        
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snake.forEach((p, i) => {
            ctx.fillStyle = i === 0 ? '#d6b3ff' : '#7a1fff';
            ctx.fillRect(p.x, p.y, box, box);
        });

        ctx.fillStyle = '#ff4d6d';
        ctx.fillRect(food.x, food.y, box, box);

        let head = { ...snake[0] };

        if (direction === 'LEFT') head.x -= box;
        if (direction === 'RIGHT') head.x += box;
        if (direction === 'UP') head.y -= box;
        if (direction === 'DOWN') head.y += box;

        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreDiv.textContent = `Score: ${score}`;
            food = randomFood();
        } else {
            snake.pop();
        }

              if (
          head.x < 0 || head.y < 0 ||
          head.x >= canvas.width || head.y >= canvas.height ||
          snake.some(p => p.x === head.x && p.y === head.y)
      ) {
          clearInterval(gameInterval);
          initGame(); 
          startScreen.style.display = 'flex';
          startScreen.textContent = 'GAME OVER – CLICK TO RESTART';
        
          return;
      }

        snake.unshift(head);
    }

    function changeDirection(e) {
        const key = e.key.toLowerCase();

        if ((key === 'arrowleft' || key === 'a') && direction !== 'RIGHT') direction = 'LEFT';
        if ((key === 'arrowright' || key === 'd') && direction !== 'LEFT') direction = 'RIGHT';
        if ((key === 'arrowup' || key === 'w') && direction !== 'DOWN') direction = 'UP';
        if ((key === 'arrowdown' || key === 's') && direction !== 'UP') direction = 'DOWN';
    }

    function randomFood() {
        return {
            x: Math.floor(Math.random() * 21) * box,
            y: Math.floor(Math.random() * 21) * box
        };
    }

    function resetGame() {
    clearInterval(gameInterval);
    initGame();
    startScreen.style.display = 'flex';
    startScreen.textContent = 'TAB / CLICK TO PLAY';
}

    function initGame() {
    snake = [{ x: 200, y: 200 }];
    direction = 'RIGHT';
    score = 0;
    scoreDiv.textContent = 'Score: 0';
    food = randomFood();
}

});
