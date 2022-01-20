import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cell } from "../grid/Cell";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    How to play
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Guess the WORDLE in 6 tries. After each guess, the color
                      of the tiles will change to show how close your guess was
                      to the word.
                    </p>
                    <p className="text-sm text-gray-500">
                      There is one "Werewolf" tile that will give you a false
                      answer every time you guess. After your first word guess,
                      you will also be able to click a tile to guess if it is
                      the Werewolf. Once you find the Werewolf, there will be no
                      new false tiles, and the previous false tiles you will be
                      bordered in red. Continue to play as normal, but remember
                      that the red-bordered tiles are still false.
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
                        rowNumber={5}
                        trimmedWerewolfGuesses={[-1, 0, 1]}
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
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
