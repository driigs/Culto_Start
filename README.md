<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>START JOVENS NOVA SANTA RITA</title>
    <style>
        body {
            background-color: #5c94fc;
            background-image: url('https://www.mariomayhem.com/downloads/misc_pics/smw_clouds.gif');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            color: white;
            font-family: 'Press Start 2P', cursive;
            text-align: center;
            transform: scale(0.9);
            transform-origin: top;
            margin: 0;
            padding: 0;
        }
        .title, .footer {
            font-size: 48px;
            text-shadow: 4px 4px 0px #000;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .title {
            font-size: 96px;
            animation: bounce 2s infinite;
            margin-top: 20px; /* Ajuste para descer a palavra START */
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }
        .title span, .footer span {
            display: inline-block;
        }
        .title span:nth-child(1) { color: red; }
        .title span:nth-child(2) { color: blue; }
        .title span:nth-child(3) { color: yellow; }
        .title span:nth-child(4) { color: green; }
        .title span:nth-child(5) { color: red; }
        .footer span:nth-child(1) { color: red; }
        .footer span:nth-child(2) { color: blue; }
        .footer span:nth-child(3) { color: yellow; }
        .footer span:nth-child(4) { color: green; }
        .footer span:nth-child(5) { color: red; }
        .footer span:nth-child(6) { color: blue; }
        .footer span:nth-child(7) { color: yellow; }
        .footer span:nth-child(8) { color: green; }
        .footer span:nth-child(9) { color: red; }
        .footer {
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
            background: linear-gradient(135deg, #ffcc00, #ff6600);
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
            background: linear-gradient(135deg, #ff6600, #ffcc00);
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
    <div class="title">
        <span>S</span><span>T</span><span>A</span><span>R</span><span>T</span>
    </div>
    
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
    
    <div class="footer">
        <span>J</span><span>O</span><span>V</span><span>E</span><span>N</span><span>S</span> <span>N</span><span>S</span><span>R</span>
    </div>
</body>
</html>
