import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let arrayAvailableMoves = []
        
        if (this.player === Player.WHITE) {
            
            if(location.row === 1)
            {                
                if(!(board.getPiece(Square.at(location.row + 1, location.col))) && 
                !(board.getPiece(Square.at(location.row + 2, location.col))))
                {
                    return [Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col)]
                    // arrayAvailableMoves.push(Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col))
                    // return arrayAvailableMoves;
                }
                else if(!(board.getPiece(Square.at(location.row + 1, location.col))) && 
                typeof(board.getPiece(Square.at(location.row + 2, location.col))) === Square)
                {
                    return [Square.at(location.row + 1, location.col)]
                    // arrayAvailableMoves.push(Square.at(location.row + 1, location.col))
                    // return arrayAvailableMoves;
                }  
                else if (!(board.getPiece(Square.at(location.row + 2, location.col))) && 
                typeof(board.getPiece(Square.at(location.row + 1, location.col))) === Square)
                {
                    return [Square.at(location.row + 2, location.col)]
                    // arrayAvailableMoves.push(Square.at(location.row + 2, location.col))
                    // return arrayAvailableMoves;
                }                
                else
                {
                    return [];
                }              
            }
            else
            {
                // if((typeof board.getPiece(Square.at(location.row + 1, location.col-1)) !== null ||
                // typeof board.getPiece(Square.at(location.row + 1, location.col-1)) !== undefined) &&
                // location.row !==7)
                // {
                //     //board.Square.at(location.row + 1, location.col-1).player                
                //      return [Square.at(location.row + 1, location.col-1)]
                //     //arrayAvailableMoves.push(Square.at(location.row + 1, location.col-1))
                //     //return arrayAvailableMoves;
                // }        
                if (location.row === 7)
                {
                    return []
                }
                else if(!(board.getPiece(Square.at(location.row + 1, location.col))))
                {
                    return [Square.at(location.row + 1, location.col)]
                    //arrayAvailableMoves.push(Square.at(location.row + 1, location.col))
                    // return arrayAvailableMoves;
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
                    // arrayAvailableMoves.push(Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col))
                    // return arrayAvailableMoves;
                }
                else if(!(board.getPiece(Square.at(location.row - 1, location.col))) && 
                    typeof(board.getPiece(Square.at(location.row - 2, location.col))) === Square)
                {
                    return [Square.at(location.row - 1, location.col)]
                    // arrayAvailableMoves.push(Square.at(location.row - 1, location.col))
                    // return arrayAvailableMoves;
                }  
                else if (!(board.getPiece(Square.at(location.row - 2, location.col))) && 
                    typeof(board.getPiece(Square.at(location.row - 1, location.col))) === Square)
                {
                    return [Square.at(location.row - 2, location.col)]
                    // arrayAvailableMoves.push(Square.at(location.row - 2, location.col))
                    // return arrayAvailableMoves;
                }
                else
                {
                    return [];
                }             
            }
            else
            {
                if (location.row === 0)
                {
                    return []
                }
                else if(!(board.getPiece(Square.at(location.row - 1, location.col))))
                {
                    return [Square.at(location.row - 1, location.col)]
                    // arrayAvailableMoves.push(Square.at(location.row - 1, location.col))
                    // return arrayAvailableMoves;
                }
                else
                {
                    return [];
                }
            }           
        }       

    }
}
