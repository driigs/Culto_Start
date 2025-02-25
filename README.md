<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>START JOVENS NOVA SANTA RITA</title>
    <style>
        body {
            background-color: #0078F0;
            background-image: url('https://www.videogamesprites.net/SonicTheHedgehog/Objects/Rings/GoldRing.gif');
            background-size: 100px;
            background-repeat: repeat;
            background-position: center;
            color: white;
            font-family: 'Press Start 2P', cursive;
            text-align: center;
            transform: scale(0.9);
            transform-origin: top;
        }
        .title {
            color: yellow;
            font-size: 96px;
            text-shadow: 4px 4px 0px #000;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .footer {
            color: yellow;
            font-size: 48px;
            text-shadow: 4px 4px 0px #000;
            font-weight: bold;
            margin-top: 50px;
        }
        .bracket {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            margin-top: 30px;
        }
        .round {
            display: flex;
            flex-direction: column;
            margin: 0 15px;
        }
        .match {
            width: 180px;
            height: 50px;
            background: linear-gradient(135deg, #FFD700, #FFAA00);
            border-radius: 10px;
            border: 3px solid #000;
            box-shadow: 4px 4px 0px #000;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 8px 0;
            cursor: pointer;
            font-weight: bold;
            color: black;
        }
        .match:hover {
            background: linear-gradient(135deg, #FFAA00, #FFD700);
        }
        .vs {
            font-size: 24px;
            font-weight: bold;
            color: red;
            text-shadow: 2px 2px 0px #000;
            margin: 5px 0;
        }
        .final-text {
            font-size: 32px;
            color: red;
            text-shadow: 2px 2px 0px #000;
            font-family: 'Press Start 2P', cursive;
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <div class="title">START</div>
    
    <div class="bracket">
        <div class="round">
            <div class="match" contenteditable="true">Jogador 1</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 2</div>
            <div class="match" contenteditable="true">Jogador 3</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 4</div>
            <div class="match" contenteditable="true">Jogador 5</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 6</div>
            <div class="match" contenteditable="true">Jogador 7</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 8</div>
        </div>
        <div class="round">
            <div class="match" contenteditable="true"></div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true"></div>
        </div>
        
        <div class="round">
            <div class="match" contenteditable="true"></div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true"></div>
            <div class="final-text">FINAL</div>
        </div>
        
        <div class="round">
            <div class="match" contenteditable="true"></div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true"></div>
            <div class="match" contenteditable="true"></div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true"></div>
        </div>
        <div class="round">
            <div class="match" contenteditable="true">Jogador 9</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 10</div>
            <div class="match" contenteditable="true">Jogador 11</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 12</div>
            <div class="match" contenteditable="true">Jogador 13</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 14</div>
            <div class="match" contenteditable="true">Jogador 15</div>
            <div class="vs">X</div>
            <div class="match" contenteditable="true">Jogador 16</div>
        </div>
    </div>
    
    <div class="footer">JOVENS NSR</div>
</body>
</html>
