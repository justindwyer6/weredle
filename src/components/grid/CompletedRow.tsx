import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
<<<<<<< HEAD
  rowNumber: number;
  guess: string;
  werewolfGuess?: number;
  trimmedWerewolfGuesses?: number[];
  isWerewolfRevealed?: boolean;
};

export const CompletedRow = ({
  rowNumber,
  guess,
  werewolfGuess,
  trimmedWerewolfGuesses,
  isWerewolfRevealed,
}: Props) => {
  const statuses = getGuessStatuses(guess);

  return (
    <div className="flex justify-center mb-1">
      {guess.split("").map((letter, i) => (
        <Cell
          key={i}
          letterIndex={i}
          rowNumber={rowNumber}
          rowType="completed"
          value={letter}
          status={statuses[i]}
          isWerewolfGuess={werewolfGuess === i}
          isWerewolfRevealed={isWerewolfRevealed}
          trimmedWerewolfGuesses={trimmedWerewolfGuesses}
        />
=======
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
>>>>>>> 58497a6b9fb28ba26b991295ab1e48a34d3ea928
      ))}
    </div>
  )
}
