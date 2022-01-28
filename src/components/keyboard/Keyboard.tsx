import { KeyValue } from "../../lib/keyboard";
import { getStatuses } from "../../lib/statuses";
import { Key } from "./Key";
import { useEffect } from "react";

type Props = {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  guesses: string[];
  isWerewolfRevealed: boolean;
};

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  isWerewolfRevealed,
}: Props) => {
  const charStatuses = getStatuses(guesses);

  const showCharStatus = (char: string) =>
    isWerewolfRevealed ? charStatuses[char] : "";

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onEnter();
      } else if (e.code === "Backspace") {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="Q" onClick={onClick} status={showCharStatus("Q")} />
        <Key value="W" onClick={onClick} status={showCharStatus("W")} />
        <Key value="E" onClick={onClick} status={showCharStatus("E")} />
        <Key value="R" onClick={onClick} status={showCharStatus("R")} />
        <Key value="T" onClick={onClick} status={showCharStatus("T")} />
        <Key value="Y" onClick={onClick} status={showCharStatus("Y")} />
        <Key value="U" onClick={onClick} status={showCharStatus("U")} />
        <Key value="I" onClick={onClick} status={showCharStatus("I")} />
        <Key value="O" onClick={onClick} status={showCharStatus("O")} />
        <Key value="P" onClick={onClick} status={showCharStatus("P")} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="A" onClick={onClick} status={showCharStatus("A")} />
        <Key value="S" onClick={onClick} status={showCharStatus("S")} />
        <Key value="D" onClick={onClick} status={showCharStatus("D")} />
        <Key value="F" onClick={onClick} status={showCharStatus("F")} />
        <Key value="G" onClick={onClick} status={showCharStatus("G")} />
        <Key value="H" onClick={onClick} status={showCharStatus("H")} />
        <Key value="J" onClick={onClick} status={showCharStatus("J")} />
        <Key value="K" onClick={onClick} status={showCharStatus("K")} />
        <Key value="L" onClick={onClick} status={showCharStatus("L")} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key value="Z" onClick={onClick} status={showCharStatus("Z")} />
        <Key value="X" onClick={onClick} status={showCharStatus("X")} />
        <Key value="C" onClick={onClick} status={showCharStatus("C")} />
        <Key value="V" onClick={onClick} status={showCharStatus("V")} />
        <Key value="B" onClick={onClick} status={showCharStatus("B")} />
        <Key value="N" onClick={onClick} status={showCharStatus("N")} />
        <Key value="M" onClick={onClick} status={showCharStatus("M")} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}
