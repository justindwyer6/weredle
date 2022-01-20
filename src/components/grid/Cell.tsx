import { CharStatus } from "../../lib/statuses";
import classnames from "classnames";
import { werewolfSolution } from "../../lib/words";

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
      ? !!isWerewolfRevealed &&
        werewolfSolution === letterIndex &&
        rowType === "completed"
      : isWerewolf;

  const disabled: boolean | undefined =
    rowType !== "current" || isWerewolfRevealed;

  const classes = classnames(
    "w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded",
    {
      "bg-white border-slate-200": !status,
      "bg-slate-400 text-white border-slate-400": status === "absent",
      "bg-green-500 text-white border-green-500": status === "correct",
      "bg-yellow-500 text-white border-yellow-500": status === "present",
      "border-red-700":
        !!isWerewolf &&
        isWerewolf &&
        typeof rowNumber !== "undefined" &&
        trimmedWerewolfGuesses &&
        rowNumber < trimmedWerewolfGuesses?.length - 1,
      "border-blue-700": !!isWerewolfGuess,
      "cursor-not-allowed": disabled,
      "hover:border-blue-300": !disabled,
      "hover:focus:border-blue-500": !disabled,
    }
  );

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
  );
};
