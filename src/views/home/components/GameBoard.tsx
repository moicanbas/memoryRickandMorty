import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

interface GameBoardProps {
  difficulty: number;
}

interface CardData {
  id: number;
  image: string;
  uid: string;
}

export default function GameBoard({ difficulty }: GameBoardProps) {
  const [deck, setDeck] = useState<CardData[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    const load = async () => {
      const totalCards = difficulty * difficulty;
      const uniqueCount = Math.floor(totalCards / 2);

      const response = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );

      const selected = response.data.results
        .slice(0, uniqueCount)
        .map((c: any) => ({ id: c.id, image: c.image }));

      const prepared: CardData[] = [...selected, ...selected]
        .map((c) => ({ ...c, uid: crypto.randomUUID() }))
        .sort(() => Math.random() - 0.5);

      setDeck(prepared);
    };

    load();
  }, [difficulty]);

  const handleFlip = (uid: string) => {
    if (lock || flipped.includes(uid) || matched.includes(uid)) return;

    const updated = [...flipped, uid];
    setFlipped(updated);

    if (updated.length === 2) {
      setLock(true);
      const [a, b] = updated;

      const cardA = deck.find((c) => c.uid === a);
      const cardB = deck.find((c) => c.uid === b);

      if (cardA && cardB && cardA.id === cardB.id) {
        setMatched((prev) => [...prev, a, b]);
        setFlipped([]);
        setLock(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 800);
      }
    }
  };

  return (
    <div
      className="grid gap-4 w-full max-w-4xl mx-auto"
      style={{ gridTemplateColumns: `repeat(${difficulty}, minmax(0, 1fr))` }}
    >
      {deck.map((card) => (
        <Card
          key={card.uid}
          image={card.image}
          flipped={flipped.includes(card.uid) || matched.includes(card.uid)}
          disabled={lock}
          onClick={() => handleFlip(card.uid)}
        />
      ))}
    </div>
  );
}
