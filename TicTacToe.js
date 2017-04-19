$(document).ready(function () {    
    var gameOver = false;
    var currentPlayer = 1;
    var gameBoard = {	
        boardAry : [0, 0, 0, 0, 0, 0, 0, 0, 0],
        score1: 0,
        score2: 0,
        turns: 0,
    };
    //gameBoard = new Board();    
    render(gameBoard);

    $('.box').on("click", function(){
        var boxIndex = parseInt($(this).attr('id')[3]);  

        if(gameBoard.boardAry[boxIndex] == 0){            
            gameBoard.boardAry[boxIndex] = currentPlayer;
            $(this).addClass('activeBox');
            if(currentPlayer == 1){
                $(this).text("O");                
                currentPlayer = 2;
            }
            else{
                $(this).text("X");
                currentPlayer = 1;
            }
        }
        gameBoard.turns+=1;
        if (checkStatus(gameBoard) == true){           
            alert("hi");
            gameOver = true;
            //gameBoard.boardAry = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            //$('.box').text(0);
            //$('.box').removeClass('activeBox');
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
    console.log(board.boardAry);
    
    //top row win
    if((board.boardAry[0] >0) && (board.boardAry[0] == board.boardAry[1]) && (board.boardAry[0] == board.boardAry[2])){
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

