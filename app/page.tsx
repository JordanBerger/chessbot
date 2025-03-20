import Image from "next/image";
import { ChessPiece } from "./components/ChessPiece";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <section>
        <h2>Board</h2>
        <ChessPiece />
        <ChessPiece />
        <ChessPiece />
      </section>
    </main>
  );
}
