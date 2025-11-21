import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useGameStore } from "../../store/gameStore";

interface LoginProps {
  onStart: () => void;
}

export default function Login({ onStart }: LoginProps) {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState<number | null>(null);
  const setPlayer = useGameStore((s) => s.setPlayer);

  const difficulties = [
    { label: "Fácil (4x4)", value: 4 },
    { label: "Medio (5x5)", value: 5 },
  ];

  const handleSubmit = () => {
    if (!name.trim() || !difficulty) return;
    setPlayer(name.trim(), difficulty);
    onStart();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-black to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-6 tracking-wide text-indigo-300">
        Rick and Morty Memory Game
      </h1>

      <div className="w-full max-w-sm p-6 rounded-2xl bg-black/40 backdrop-blur border border-indigo-700 flex flex-col gap-4">
        <span className="p-float-label">
          <InputText
            id="name"
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="text-gray-300">
            Nombre
          </label>
        </span>

        <Dropdown
          value={difficulty}
          options={difficulties}
          onChange={(e) => setDifficulty(e.value)}
          placeholder="Seleccionar dificultad"
          className="w-full"
        />

        <Button
          label="Comenzar"
          onClick={handleSubmit}
          className="w-full bg-indigo-500 hover:bg-indigo-600 border-none"
        />
      </div>
    </div>
  );
}
