import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>
      <p className="text-sm text-gray-500">
        Guess the WEREDLE (like wear-dull) in 6 tries. After each
        guess, the color of the tiles will change to show how
        close your guess was to the word.
      </p>
      <br />
      <p className="text-sm text-gray-500">
        There is one 🐺 Werewolf tile that may (or may not) give
        you a false answer every time you guess. After your first
        word guess, you must click a tile to guess if it is the
        Werewolf.
      </p>
      <br />
      <p className="text-sm text-gray-500">
        Once you find the Werewolf, there will be no new false
        tiles, the previous false tiles will be bordered in red,
        and the keyboard will reveal the truth about the tiles
        you've guessed.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell letterIndex={0} value="W" status="correct" />
        <Cell letterIndex={0} value="E" />
        <Cell letterIndex={0} value="A" />
        <Cell letterIndex={0} value="R" />
        <Cell letterIndex={0} value="Y" />
      </div>
      <p className="text-sm text-gray-500">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell letterIndex={0} value="P" />
        <Cell letterIndex={0} value="I" />
        <Cell letterIndex={0} value="L" status="present" />
        <Cell letterIndex={0} value="L" />
        <Cell letterIndex={0} value="S" />
      </div>
      <p className="text-sm text-gray-500">
        The letter L is in the word (once), but in a different
        spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell letterIndex={0} value="V" />
        <Cell letterIndex={0} value="A" />
        <Cell letterIndex={0} value="G" />
        <Cell letterIndex={0} value="U" status="absent" />
        <Cell letterIndex={0} value="E" />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is not in the word in any spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell letterIndex={0} value="L" status="absent" />
        <Cell
          letterIndex={0}
          value="I"
          rowType="completed"
          status="present"
          isWerewolf={true}
          isWerewolfRevealed={true}
          rowNumber={2}
          trimmedWerewolfGuesses={[-1, 0, 1, 2]}
        />
        <Cell letterIndex={0} value="A" status="absent" />
        <Cell letterIndex={0} value="R" status="absent" />
        <Cell letterIndex={0} value="S" status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        The second tile has been revealed as the Werewolf, so the
        letter I is either not in the word or in the wrong spot
        (the keyboard will show the correct status).
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell letterIndex={0} value="T" status="absent" />
        <Cell letterIndex={0} value="R" status="present" />
        <Cell
          letterIndex={0}
          value="U"
          status="correct"
          isWerewolfGuess={true}
        />
        <Cell letterIndex={0} value="T" status="absent" />
        <Cell letterIndex={0} value="H" status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        You already guessed the third tile and found out it wasn't
        the Werewolf, so you know for sure that U is in the right
        spot.
      </p>
    </BaseModal>
  )
}
