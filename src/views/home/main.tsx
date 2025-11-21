import { useGameStore } from "../../store/gameStore";
import GameBoard from "./components/GameBoard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { playerName, difficulty } = useGameStore();
  const navigate = useNavigate();

  if (!playerName) navigate("/");

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white flex flex-col gap-6">
      <header className="text-3xl font-semibold text-indigo-300">
        Bienvenido, {playerName}
      </header>
      <GameBoard difficulty={difficulty} />
    </div>
  );
}
