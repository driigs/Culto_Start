document.addEventListener('DOMContentLoaded', function () {
    $("input[name='p_name_a'").attr('minlength', 1);
    $("input[name='p_name_b'").attr('minlength', 1);
    $("input[name='p_name_a'").attr('maxlength', 10);
    $("input[name='p_name_b'").attr('maxlength', 10);
    $("input[name='p_name_a'").on("change", updateCPMatchPlayerName);
    $("input[name='p_name_b'").on("change", updateCPMatchPlayerName);

    $("input[name='p_score_a'").attr('min', 0);
    $("input[name='p_score_b'").attr('min', 0);
    $("input[name='p_score_a'").attr('max', 3);
    $("input[name='p_score_b'").attr('max', 3);
    $("input[name='p_score_a'").attr('minlength', 1);
    $("input[name='p_score_b'").attr('maxlength', 1);
    $("input[name='p_score_a'").on("change", updateCPMatchPlayerScore);
    $("input[name='p_score_b'").on("change", updateCPMatchPlayerScore);

    $("input[name='p_final_score_a'").attr('min', 0);
    $("input[name='p_final_score_b'").attr('min', 0);
    $("input[name='p_final_score_a'").attr('max', 5);
    $("input[name='p_final_score_b'").attr('max', 5);
    $("input[name='p_final_score_a'").attr('minlength', 1);
    $("input[name='p_final_score_b'").attr('maxlength', 1);
    $("input[name='p_final_score_a'").on("change", updateCPMatchPlayerScore);
    $("input[name='p_final_score_b'").on("change", updateCPMatchPlayerScore);

    $("input[id='restart-cp-btn']").on("click", restartChampionship)

    loadChampionship();
});

function getCurrentMatchDiv(side, level, matchId) {
    const currMatchDiv = $(`div[data-side='${side}'][data-level='${level}'][data-mId='${matchId}']`);
    return currMatchDiv;
}

function getNextMatchDiv(currMatchValues) {
    const nextMatchDiv = $(`div[data-side='${currMatchValues.wnm.side}'][data-level='${currMatchValues.wnm.level}'][data-mId='${currMatchValues.wnm.matchId}']`);
    return nextMatchDiv;
}

function getCurrentCPMatchDataFromInput() {
    const fatherMatchDiv = $(this).parent().parent();
    const side = fatherMatchDiv.attr('data-side');
    const level = fatherMatchDiv.attr('data-level');
    const matchId = fatherMatchDiv.attr('data-mId');

    const currMatchDiv = getCurrentMatchDiv(side, level, matchId);

    const strFinal = side === 'final' ? 'final_' : '';

    const playerNameA = currMatchDiv.find("input[name='p_name_a']").val();
    const playerNameB = currMatchDiv.find("input[name='p_name_b']").val();
    const playerScoreA = currMatchDiv.find(`input[name='p_${strFinal}score_a']`).val();
    const playerScoreB = currMatchDiv.find(`input[name='p_${strFinal}score_b']`).val();
    const maxScore = currMatchDiv.find(`input[name='p_${strFinal}score_a']`).attr('max');

    const wnmSide = currMatchDiv.attr('data-wnm-side');
    const wnmLevel = currMatchDiv.attr('data-wnm-level');
    const wnmMId = currMatchDiv.attr('data-wnm-mId');
    const wnmPlayer = currMatchDiv.attr('data-wnm-player');

    return {
        side,
        level,
        matchId,
        maxScore,
        playerNameA,
        playerNameB,
        playerScoreA,
        playerScoreB,
        wnm: {
            side: wnmSide,
            level: wnmLevel,
            matchId: wnmMId,
            player: wnmPlayer
        }
    }
}

function updateWinnerNextMatchDiv(nextMatchDiv, currMatchValues, winner) {
    const strFinal = currMatchValues.wnm.side === 'final' ? 'final_' : '';

    const nmPlayerNameSelector = `p_name_${currMatchValues.wnm.player.toLowerCase()}`;
    const nmPlayerScoreSelector = `p_${strFinal}score_${currMatchValues.wnm.player.toLowerCase()}`;

    const nextMatchPlayerNameInput = nextMatchDiv.find(`input[name='${nmPlayerNameSelector}']`);
    const nextMatchPlayerScoreInput = nextMatchDiv.find(`input[name='${nmPlayerScoreSelector}']`);

    nextMatchPlayerNameInput.val(winner);
    nextMatchPlayerScoreInput.val(0);
}

function updateCPMatch() {
    const currMatchValues = getCurrentCPMatchDataFromInput.call(this);
    let winnerPlayer = '';

    if (currMatchValues.playerScoreA == currMatchValues.maxScore) {
        winnerPlayer = currMatchValues.playerNameA;
    } else if (currMatchValues.playerScoreB == currMatchValues.maxScore) {
        winnerPlayer = currMatchValues.playerNameB;
    }

    const payload = {
        playerA: currMatchValues.playerNameA,
        playerB: currMatchValues.playerNameB,
        scoreA: currMatchValues.playerScoreA,
        scoreB: currMatchValues.playerScoreB,
        winner: winnerPlayer
    }

    if (winnerPlayer !== '') {
        alert(`${winnerPlayer} won the ${currMatchValues.side === 'final' ? 'championship' : 'match'}!`);

        if (currMatchValues.side === 'final') {
            const cpWinnerInput = $("input[id='p_winner_name']");
            cpWinnerInput.val(winnerPlayer);
        } else {
            const nextMatchDiv = getNextMatchDiv(currMatchValues);
            updateWinnerNextMatchDiv(nextMatchDiv, currMatchValues, winnerPlayer);
        }
    }

    $.ajax({
        type: 'PUT',
        url: `/api/start/matches/${currMatchValues.side}/${currMatchValues.level}/${currMatchValues.matchId}`,
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: function (response) {
            console.info('updateCPMatchPlayerName', response);
        },
        error: function (error) {
            console.error('updateCPMatchPlayerName', error);
        }
    });
}

function updateCPMatchPlayerName(event) {
    updateCPMatch.call(this);
}

function updateCPMatchPlayerScore(event) {
    updateCPMatch.call(this);
}

function renderChampionship(championship) {
    const cpWinnerInput = $("input[id='p_winner_name']");
    cpWinnerInput.val(championship.winner);

    const matches = championship.matches;
    for (const side in matches) {
        const sideMatches = matches[side];
        for (let level = 0; level < sideMatches.length; level++) {
            const levelMatches = sideMatches[level];
            for (let matchId = 0; matchId < levelMatches.length; matchId++) {
                const matchData = levelMatches[matchId];
                const matchDiv = getCurrentMatchDiv(side, level + 1, matchId + 1);
                const strFinal = side === 'final' ? 'final_' : '';

                matchDiv.find("input[name='p_name_a']").val(matchData.players.playerA);
                matchDiv.find("input[name='p_name_b']").val(matchData.players.playerB);
                matchDiv.find(`input[name='p_${strFinal}score_a']`).val(matchData.score.playerA);
                matchDiv.find(`input[name='p_${strFinal}score_b']`).val(matchData.score.playerB);
            }
        }
    }
}

function loadChampionship() {
    $.ajax({
        type: 'GET',
        url: '/api/start',
        contentType: 'application/json',
        success: function (response) {
            console.info('loadChampionship', response);
            renderChampionship(response);
        },
        error: function (error) {
            console.error('loadChampionship', error);
        }
    });
}

function clearChampionship(championship) {
    const cpWinnerInput = $("input[id='p_winner_name']");
    cpWinnerInput.val('');

    const matches = championship.matches;
    for (const side in matches) {
        const sideMatches = matches[side];
        for (let level = 0; level < sideMatches.length; level++) {
            const levelMatches = sideMatches[level];
            for (let matchId = 0; matchId < levelMatches.length; matchId++) {
                const matchData = levelMatches[matchId];
                const matchDiv = getCurrentMatchDiv(side, level + 1, matchId + 1);
                const strFinal = side === 'final' ? 'final_' : '';

                matchDiv.find("input[name='p_name_a']").val('');
                matchDiv.find("input[name='p_name_b']").val('');
                matchDiv.find(`input[name='p_${strFinal}score_a']`).val('');
                matchDiv.find(`input[name='p_${strFinal}score_b']`).val('');
            }
        }
    }

    $.ajax({
        type: 'DELETE',
        url: '/api/start',
        success: function (response) {
            console.info('restartChampionship', response);
        },
        error: function (error) {
            console.error('restartChampionship', error);
        }
    });
}

function restartChampionship() {
    $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Restart": function() {
                $.ajax({
                    type: 'GET',
                    url: '/api/start',
                    contentType: 'application/json',
                    success: function (response) {
                        console.info('loadChampionship', response);
                        clearChampionship(response);
                    },
                    error: function (error) {
                        console.error('loadChampionship', error);
                    }
                });
                $( this ).dialog( "close" );
            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        }
    });
}