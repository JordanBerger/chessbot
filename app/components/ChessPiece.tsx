import { generateChessMove } from "../services/logic";

export const ChessPiece = () => {
  return (
    <div>
      <img src="rook.png" />
      <button onClick={generateChessMove}>Move me</button>
    </div>
  );
};
