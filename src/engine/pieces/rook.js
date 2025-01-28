import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let arrayRook = [];
        for (let i = 0; i < 8; i++)
        {
            if (i !== location.col) {
                arrayRook.push(Square.at(location.row, i));
            }
        }
        for (let i = 0; i < 8; i++)
            {
                if (i !== location.row) {
                    arrayRook.push(Square.at(i, location.col));
                }
            }
        
        return arrayRook;
    }

}
