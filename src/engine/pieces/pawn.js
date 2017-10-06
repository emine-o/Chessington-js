import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        
        
        if (this.player === Player.WHITE) {
            if(location.row === 1)
            {
                if(!(board.getPiece(Square.at(location.row + 1, location.col))) && 
                !(board.getPiece(Square.at(location.row + 2, location.col))))
                {
                    return [Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col)]
                }
                else if(!(board.getPiece(Square.at(location.row + 1, location.col))) && 
                typeof(board.getPiece(Square.at(location.row + 2, location.col))) === Square)
                {
                    return [Square.at(location.row + 1, location.col)]
                }  
                else if (!(board.getPiece(Square.at(location.row + 2, location.col))) && 
                typeof(board.getPiece(Square.at(location.row + 1, location.col))) === Square)
                {
                    return [Square.at(location.row + 2, location.col)]
                }                
                else
                {
                    return [];
                }              
            }
            else
            {
                if(!(board.getPiece(Square.at(location.row + 1, location.col))))
                {
                    return [Square.at(location.row + 1, location.col)]
                }
                else
                {
                    return [];
                }
            }            
        } 
        else {
            if(location.row === 6)
            {
                if(!(board.getPiece(Square.at(location.row - 1, location.col))) && 
                    !(board.getPiece(Square.at(location.row - 2, location.col))))
                {
                    return [Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col)]
                }
                else if(!(board.getPiece(Square.at(location.row - 1, location.col))) && 
                    typeof(board.getPiece(Square.at(location.row - 2, location.col))) === Square)
                {
                    return [Square.at(location.row - 1, location.col)]
                }  
                else if (!(board.getPiece(Square.at(location.row - 2, location.col))) && 
                    typeof(board.getPiece(Square.at(location.row - 1, location.col))) === Square)
                {
                    return [Square.at(location.row - 2, location.col)]
                }
                else
                {
                    return [];
                }             
            }
            else
            {
                if(!(board.getPiece(Square.at(location.row - 1, location.col))))
                {
                    return [Square.at(location.row - 1, location.col)]
                }
                else
                {
                    return [];
                }
            }           
        }       

    }
}
