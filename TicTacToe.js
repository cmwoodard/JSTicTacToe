$(document).ready(function () {    
    var gameOver = false;
    var gameStatus = false;

    var gameBoard = {	
        boardAry : [0, 0, 0, 0, 0, 0, 0, 0, 0],
        score1: 0,
        score2: 0,
        turns: 0,
        winner: 1,
        currentPlayer: 1,
    };
    //gameBoard = new Board();    
    render(gameBoard);

    $('.box').on("click", function(){
        var boxIndex = parseInt($(this).attr('id')[3]);  
        gameBoard.turns+=1;
        
        if(gameBoard.boardAry[boxIndex] == 0){            
            gameBoard.boardAry[boxIndex] = gameBoard.currentPlayer;
            $(this).addClass('activeBox');

            
            if(gameBoard.currentPlayer == 1){
                $(this).text("O");                
                gameBoard.currentPlayer = 2;
            }
            else{
                $(this).text("X");
                gameBoard.currentPlayer = 1;
            }
            gameStatus = checkStatus(gameBoard);
        }
        
        if (gameStatus){          
           
            gameOver = true;
            //update score
            if(gameBoard.winner == 1){
                gameBoard.score1 +=1;
                var temp = "Player 1:" + gameBoard.score1;
                $('#score1').text(temp);
            }
            else{
                gameBoard.score2 +=1;
                $('#score2').text("Player 2:" + gameBoard.score2);
            }
            
            setTimeout(
                function(){
                    alert("Player " + gameBoard.winner + " has won!");
                    gameBoard.boardAry = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    $('.box').text(0);
                    $('.box').removeClass('activeBox');
            }, 50);
            
        }        
        
    });
    
   

});

function render(newBoard){    
    $('#container').html('');
    for(i=0;i<9;i++){
        var divString = '<div class="box" id="box'+ i +'">0</div>';
        $('#container').append(divString);
        $('#score1').text('Player 1: ' + newBoard.score1);
        $('#score2').text('Player 2: ' + newBoard.score2);
    }
}

function checkStatus(board){
    var zeroCount = 0;
    var i = board.boardAry.length;
    
    //top row win
    if((board.boardAry[0] >0) && (board.boardAry[0] == board.boardAry[1]) && (board.boardAry[0] == board.boardAry[2])){
        board.winner = board.currentPlayer;
        return true;
    }
    //middle row win
    if((board.boardAry[3] >0) && (board.boardAry[3] == board.boardAry[4]) && (board.boardAry[3] == board.boardAry[5])){
        board.winner = board.currentPlayer;
        return true;
    }
    //bottom row win
    if((board.boardAry[6] >0) && (board.boardAry[6] == board.boardAry[7]) && (board.boardAry[6] == board.boardAry[8])){
        board.winner = board.currentPlayer;
        return true;
    }
    //left column win
    if((board.boardAry[0] >0) && (board.boardAry[0] == board.boardAry[3]) && (board.boardAry[0] == board.boardAry[6])){
        board.winner = board.currentPlayer;
        return true;
    }
    //middle column win
    if((board.boardAry[1] >0) && (board.boardAry[1] == board.boardAry[4]) && (board.boardAry[1] == board.boardAry[7])){
        board.winner = board.currentPlayer;
        return true;
    }
    //right column win
    if((board.boardAry[2] >0) && (board.boardAry[2] == board.boardAry[5]) && (board.boardAry[2] == board.boardAry[8])){
        board.winner = board.currentPlayer;
        return true;
    }

	while(i--){        
		if(board.boardAry[i] == 0){
            zeroCount+=1;            
        }        
	}	
    if(zeroCount == 0){
        return true;
    }
    return false;
}

