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
            position: relative;
        }
        .title, .footer {
            font-size: 75px;
            text-shadow: 6px 6px 0px #000;
            font-weight: bold;
            margin-bottom: -80px;
        }
        .title {
            font-size: 100px;
            animation: bounce 2s infinite;
            margin-top: 50px; /* Ajuste para descer a palavra START */
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
            margin-top: 40px;
        }
        .bracket {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: nowrap;
            margin-top: 20px;
        }
        .round {
            display: flex;
            flex-direction: column;
            margin: 60px;
            position: 60px;
        }
        .match {
            width: 150px;
            height: 50px;
            background: linear-gradient(135deg, #ffcc00, #ff6600);
            border-radius: 10px;
            border: 3px solid #000;
            box-shadow: 4px 4px 0px #000;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px; /* Ajuste de espaçamento */
            cursor: pointer;
            font-weight: bold;
            color: black;
            position: relative;
        }
        .score {
            width: 70px;
            height: 40px;
            background: linear-gradient(135deg, #ffcc00, #ff6600);
            border-radius: 10px;
            border: 3px solid #000;
            box-shadow: 4px 4px 0px #000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: black;
            position: absolute;
            right: -80px; /* Ajuste a posição conforme necessário */
        }
        .match-left .score {
            left: -80px; /* Ajuste a posição conforme necessário */
            right: auto;
        }
        .match:hover {
            background: linear-gradient(135deg, #ff6600, #ffcc00);
        }
        .vs {
            font-size: 24px;
            font-weight: bold;
            color: red;
            text-shadow: 2px 2px 0px #000;
            margin: 5px;
        }
        .transparent {
    color: #5c94fc; /* Mesma cor do fundo */
    text-shadow: none; /* Remove qualquer sombra de texto */
    caret-color: transparent; /* Remove o cursor visível */
}
        .final-text {
            font-size: 32px;
            color: red;
            text-shadow: 2px 2px 0px #000;
            font-family: 'Press Start 2P', cursive;
            margin-top: 20px;
            font-weight: bold;
        }
        .trophy {
            position: absolute;
            top: -80px; /* Ajuste para posicionar mais para cima */
            left: 50%;
            transform: translateX(-50%);
            width: 160px; /* Dobro do tamanho original */
            height: 160px; /* Dobro do tamanho original */
        }
        .champion {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 64px;
            color: yellow;
            text-shadow: 4px 4px 0px #000;
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;
        }
        .centered {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .finals {
            position: relative;
            margin-top: 300px; /* Ajuste conforme necessário */
        }
    /* Ajuste para as colunas da esquerda */
    .bracket > .round:nth-child(1) {
        margin-left: -120px; /* Move a primeira coluna mais para a esquerda */
    }
    .bracket > .round:nth-child(2) {
        margin-left: -80px; /* Move a segunda coluna mais para a esquerda */
    }
    .bracket > .round:nth-child(3) {
        margin-left: -40px; /* Move a terceira coluna mais para a esquerda */
    }

    /* Ajuste para as colunas da direita */
    .bracket > .round:nth-last-child(1) {
        margin-right: -120px; /* Move a última coluna mais para a direita */
    }
    .bracket > .round:nth-last-child(2) {
        margin-right: -80px; /* Move a penúltima coluna mais para a direita */
    }
    .bracket > .round:nth-last-child(3) {
        margin-right: -40px; /* Move a antepenúltima coluna mais para a direita */
    }

    /* Centraliza a final */
    .finals {
        margin-left: auto;
        margin-right: auto;
    }
    /* Ajuste para as colunas da esquerda */
    .bracket > .round:nth-child(1) {
        margin-left: -90px; /* Move a primeira coluna mais para a esquerda */
    }
    .bracket > .round:nth-child(2) {
        margin-left: 70px; /* Move a segunda coluna mais para a esquerda */
    }
    .bracket > .round:nth-child(3) {
        margin-left: 75px; /* Move a terceira coluna mais para a esquerda */
    }

    /* Ajuste para as colunas da direita */
    .bracket > .round:nth-last-child(1) {
        margin-right: -90px; /* Move a última coluna mais para a direita */
    }
    .bracket > .round:nth-last-child(2) {
        margin-right: 70px; /* Move a penúltima coluna mais para a direita */
    }
    .bracket > .round:nth-last-child(3) {
        margin-right: 75px; /* Move a antepenúltima coluna mais para a direita */
    }

    /* Centraliza a final */
    .finals {
        margin-left: auto;
        margin-right: auto;
        height: 330px;
    }
   /* Quartas de Final - Esquerda */
.bracket > .round:nth-child(2) {
    margin-top: 250px; /* Ajuste a posição vertical */
    height: 500px; /* Ajuste a altura */
}

/* Semifinal - Esquerda */
.bracket > .round:nth-child(3) {
    margin-top: 330px; /* Ajuste a posição vertical */
    height: 500px; /* Ajuste a altura */
}

/* Quartas de Final - Direita */
.bracket > .round:nth-last-child(2) {
    margin-top: 250px; /* Ajuste a posição vertical */
    height: 500px; /* Ajuste a altura */
}
/* Semifinal - Direita */
.bracket > .round:nth-last-child(3) {
    margin-top: 330px; /* Ajuste a posição vertical */
    height: 500px; /* Ajuste a altura */
}
/* Ajuste o espaçamento entre os jogos */
.match

/* Espaço entre Jogadores 2 e 3 */
.round > .match:nth-child(2) {
    margin-bottom: 100px;
}

/* Espaço entre Jogadores 4 e 5 */
.round .match:nth-of-type(4) {
    margin-bottom: 100px !important;
}

/* Espaço entre Jogadores 6 e 7 */
.round .match:nth-of-type(6) {
    margin-bottom: 100px !important;
}

/* Espaço entre Jogadores 10 e 11 */
.round .match:nth-of-type(10) {
    margin-bottom: 100px !important;
}

/* Espaço entre Jogadores 12 e 13 */
.round .match:nth-of-type(12) {
    margin-bottom: 100px !important;
}

/* Espaço entre Jogadores 14 e 15 */
.round .match:nth-of-type(14) {
    margin-bottom: 100px !important;
}

/* Espaço entre Vencedor do Duelo 6 e Vencedor do Duelo 7 */
.round.centered .match:nth-of-type(6) {
    margin-bottom: 100px !important;
}

/* Espaço entre Vencedor do Duelo 2 e Vencedor do Duelo 3 */
.round.centered .match:nth-of-type(2) {
    margin-bottom: 0px !important;
}
/* Ajuste o espaçamento entre os jogos */
.finals .match {
    margin: 15px; /* Ajuste o espaçamento entre os jogos */
}
.trophy {
    position: absolute;
    top: -170px; /* Ajuste para posicionar mais para cima */
    left: 50%;
    transform: translateX(-50%);
    width: 160px; /* Largura do troféu */
    height: 160px; /* Altura do troféu */
}
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <div class="title">
        <span>S</span><span>T</span><span>A</span><span>R</span><span>T</span>
    </div>
    
    <div class="bracket">
        <!-- Oitavas de Final da Chave 1 -->
        <div class="round">
            <div class="match">
                <div contenteditable="true">Jogador 1</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Jogador 2</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match">
                <div contenteditable="true">Jogador 3</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Jogador 4</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match">
                <div contenteditable="true">Jogador 5</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Jogador 6</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match">
                <div contenteditable="true">Jogador 7</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Jogador 8</div>
                <div class="score" contenteditable="true">0</div>
            </div>
        </div>
        
        <!-- Quartas de Final da Chave 1 -->
        <div class="round centered">
            <div class="match">
                <div contenteditable="true">Vencedor do duelo 1</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Vencedor do duelo 2</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match">
                <div contenteditable="true">Vencedor do duelo 3</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Vencedor do duelo 4</div>
                <div class="score" contenteditable="true">0</div>
            </div>
        </div>
        
        <!-- Semifinal da Chave 1 -->
        <div class="round centered">
            <div class="match">
                <div contenteditable="true">Vencedor das Quartas 1</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Vencedor das Quartas 2</div>
                <div class="score" contenteditable="true">0</div>
            </div>
        </div>
        
        <!-- Final -->
        <div class="round finals centered">
            <img src="HTML/img/trop.png" alt="Trophy" class="trophy">
            <div class="match match-left">
                <div contenteditable="true">Finalista Chave 1</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match">
                <div contenteditable="true">Finalista Chave 2</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="final-text">FINAL</div>
        </div>
        
        <!-- Semifinal da Chave 2 -->
        <div class="round centered">
            <div class="match match-left">
                <div contenteditable="true">Vencedor das Quartas 3</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Vencedor das Quartas 4</div>
                <div class="score" contenteditable="true">0</div>
            </div>
        </div>
        
        <!-- Quartas de Final da Chave 2 -->
        <div class="round centered">
            <div class="match match-left">
                <div contenteditable="true">Vencedor do duelo 5</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Vencedor do duelo 6</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match match-left">
                <div contenteditable="true">Vencedor do duelo 7</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Vencedor do duelo 8</div>
                <div class="score" contenteditable="true">0</div>
            </div>
        </div>
        
        <!-- Oitavas de Final da Chave 2 -->
        <div class="round">
            <div class="match match-left">
                <div contenteditable="true">Jogador 9</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 10</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 11</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 12</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 13</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 14</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs"><span class="transparent">espaço</span></div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 15</div>
                <div class="score" contenteditable="true">0</div>
            </div>
            <div class="vs">vs</div>
            <div class="match match-left">
                <div contenteditable="true">Jogador 16</div>
                <div class="score" contenteditable="true">0</div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <span>J</span><span>O</span><span>V</span><span>E</span><span>N</span><span>S</span> <span>N</span><span>S</span><span>R</span>
    </div>

    <div class="champion" id="champion"></div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const scores = document.querySelectorAll('.score'); // Seleciona todos os elementos de pontuação
        
            scores.forEach(score => {
                // Adiciona eventos 'blur' e 'keydown' para capturar alterações no campo
                score.addEventListener('blur', handleScoreUpdate);
                score.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {
                        handleScoreUpdate({ target: score });
                        score.blur(); // Sai do campo ao pressionar Enter
                    }
                });
            });
        
            function handleScoreUpdate(event) {
                const score = event.target;
                const currentScore = parseInt(score.textContent.trim());
                if (isNaN(currentScore)) {
                    score.textContent = '0'; // Garante que o valor seja numérico
                    return;
                }
        
                // Verifica se o jogador atingiu 3 pontos
                if (currentScore >= 3) {
                    score.textContent = '3'; // Limita o score a 3 pontos
                    const playerName = score.previousElementSibling.textContent.trim();
                    const nextMatch = findNextMatch(score);
        
                    if (nextMatch) {
                        // Avança o vencedor para a próxima fase
                        const nextPlayerSlot = Array.from(nextMatch.querySelectorAll('div[contenteditable="true"]'))
                            .find(slot => slot.textContent.trim() === '');
                        if (nextPlayerSlot) {
                            nextPlayerSlot.textContent = playerName;
                            console.log(`Jogador "${playerName}" avançou para a próxima fase.`);
                        } else {
                            console.warn('Nenhum slot disponível na próxima partida.');
                        }
                    } else {
                        console.warn('Próxima partida não encontrada.');
                    }
                }
            }
        
            // Função para encontrar a próxima partida
            function findNextMatch(currentScoreElement) {
                const currentMatch = currentScoreElement.closest('.match');
                const currentRound = currentMatch.closest('.round');
                const isLeftSide = currentMatch.classList.contains('match-left'); // Verifica se é do lado esquerdo
                const allRounds = Array.from(document.querySelectorAll('.round'));
                const currentRoundIndex = allRounds.indexOf(currentRound);
        
                if (currentRoundIndex >= 0 && currentRoundIndex < allRounds.length - 1) {
                    const nextRound = allRounds[currentRoundIndex + 1];
                    const nextMatches = Array.from(nextRound.querySelectorAll(isLeftSide ? '.match-left' : '.match:not(.match-left)')); // Filtra pelo lado
        
                    // Procura a próxima partida disponível (não preenchida)
                    for (const nextMatch of nextMatches) {
                        const nextPlayerSlots = nextMatch.querySelectorAll('div[contenteditable="true"]');
                        if (nextPlayerSlots.length > 0 && Array.from(nextPlayerSlots).some(slot => slot.textContent.trim() === '')) {
                            return nextMatch;
                        }
                    }
                }
                return null;
            }
        });
        </script>
</body>
</html>
