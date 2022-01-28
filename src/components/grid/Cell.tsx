import { CharStatus } from "../../lib/statuses";
import classnames from "classnames";
import { werewolfSolution } from "../../lib/words";
import getNumberFromZeroToNine from "../../utilities/getNumberFromZeroToNine";

type Props = {
  letterIndex: number;
  rowNumber?: number;
  rowType?: "current" | "completed" | "empty";
  value?: string;
  status?: CharStatus;
  isWerewolf?: boolean;
  isWerewolfGuess?: boolean;
  isWerewolfRevealed?: boolean;
  trimmedWerewolfGuesses?: number[];
  onClick?: (letterIndex: number) => void;
};

export const Cell = ({
  letterIndex,
  rowNumber,
  rowType,
  value,
  status,
  isWerewolf,
  isWerewolfGuess,
  isWerewolfRevealed,
  trimmedWerewolfGuesses,
  onClick,
}: Props) => {
  isWerewolf =
    typeof isWerewolf === "undefined"
      ? werewolfSolution === letterIndex
      : isWerewolf;

  const hasColumnBeenGuessed: boolean =
    trimmedWerewolfGuesses?.includes(letterIndex) || false;

  const isAfterWerewolfRevealed =
    isWerewolfRevealed &&
    typeof rowNumber !== "undefined" &&
    typeof trimmedWerewolfGuesses !== "undefined" &&
    rowNumber >= trimmedWerewolfGuesses?.length;

  const disabled: boolean | undefined =
    rowType !== "current" ||
    isWerewolfRevealed ||
    rowNumber === 0 ||
    hasColumnBeenGuessed;

  const falseStatus = (function () {
    if (
      isWerewolf &&
      !!value &&
      !isAfterWerewolfRevealed &&
      rowType === "completed"
    ) {
      const falseStatuses: CharStatus[] = [
        "present",
        "absent",
        "correct",
        "absent",
      ];
      const werewolfLieSource: number =
        value.charCodeAt(0) * (werewolfSolution + 2);
      const statusIndex = Math.floor(
        getNumberFromZeroToNine(werewolfLieSource) / 3
      );
      return falseStatuses[statusIndex];
    }
    return null;
  })();

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded',
    {
      "bg-white border-slate-200": !status,
      "bg-slate-400 text-white border-slate-400": !!falseStatus
        ? falseStatus === "absent"
        : status === "absent",
      "bg-green-500 text-white border-green-500": !!falseStatus
        ? falseStatus === "correct"
        : status === "correct",
      "bg-yellow-500 text-white border-yellow-500": !!falseStatus
        ? falseStatus === "present"
        : status === "present",
      "border-red-700":
        !!isWerewolf &&
        !isAfterWerewolfRevealed &&
        !!isWerewolfRevealed &&
        rowType === "completed",
      "border-blue-700": !!isWerewolfGuess,
      "cursor-not-allowed": disabled,
      "hover:border-blue-300": !disabled,
      "hover:focus:border-blue-500": !disabled,
    }
  )

  return (
    <>
      <button
        className={classes}
        onClick={() =>
          !!onClick && !isWerewolfRevealed && rowType === "current"
            ? onClick(letterIndex)
            : null
        }
        disabled={disabled}
      >
        {value}
      </button>
    </>
  )
}
