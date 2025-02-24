<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>START JOVENS NOVA SANTA RITA</title>
    <style>
        body {
            background-color: black;
            color: white;
            font-family: 'Press Start 2P', cursive;
            text-align: center;
            transform: scale(0.8);
            transform-origin: top;
        }
        h1 {
            color: hotpink;
            font-size: 32px;
        }
        .bracket {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            margin-top: 50px;
        }
        .round {
            display: flex;
            flex-direction: column;
            margin: 0 10px;
        }
        .match {
            width: 160px;
            height: 40px;
            background-color: #00ffcc;
            border: 3px solid #ff33cc;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px 0;
            cursor: pointer;
        }
        .match:hover {
            background-color: #ff33cc;
        }
        .champion {
            margin-top: 50px;
        }
        .trophy {
            font-size: 50px;
            display: none;
        }
        .blinking-trophy {
            font-size: 150px;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            animation: blink 0.5s infinite alternate;
            filter: drop-shadow(0 0 20px gold);
            image-rendering: pixelated;
        }
        @keyframes blink {
            from { opacity: 1; filter: drop-shadow(0 0 25px gold); }
            to { opacity: 0.5; filter: drop-shadow(0 0 10px gold); }
        }
        .fireworks {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            background: url('https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif') center center / cover no-repeat;
            display: none;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <h1>Culto Start</h1>
    <div class="bracket">
        <div class="round">
            <div class="match" contenteditable="true">Jogador 1</div>
            <div class="match" contenteditable="true">Jogador 2</div>
            <div class="match" contenteditable="true">Jogador 3</div>
            <div class="match" contenteditable="true">Jogador 4</div>
            <div class="match" contenteditable="true">Jogador 5</div>
            <div class="match" contenteditable="true">Jogador 6</div>
            <div class="match" contenteditable="true">Jogador 7</div>
            <div class="match" contenteditable="true">Jogador 8</div>
            <div class="match" contenteditable="true">Jogador 9</div>
            <div class="match" contenteditable="true">Jogador 10</div>
            <div class="match" contenteditable="true">Jogador 11</div>
            <div class="match" contenteditable="true">Jogador 12</div>
            <div class="match" contenteditable="true">Jogador 13</div>
            <div class="match" contenteditable="true">Jogador 14</div>
            <div class="match" contenteditable="true">Jogador 15</div>
            <div class="match" contenteditable="true">Jogador 16</div>
        </div>
        <div class="round">
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
        </div>
        <div class="round">
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
        </div>
        <div class="round">
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
        </div>
        <div class="round">
            <div class="match" contenteditable="true" oninput="showTrophy()"></div>
        </div>
        <div class="trophy">🏆</div>
        <div class="blinking-trophy">🏆</div>
    </div>
    <div class="fireworks" id="fireworks"></div>
    <script>
        function showTrophy() {
            let champion = document.querySelector('.round:last-child .match');
            let trophy = document.querySelector('.trophy');
            let fireworks = document.getElementById('fireworks');
            if (champion.innerText.trim() !== '') {
                trophy.style.display = 'block';
                fireworks.style.display = 'block';
                setTimeout(() => { fireworks.style.display = 'none'; }, 3000);
            }
        }
    </script>
</body>
</html>
