import { CharStatus } from "../../lib/statuses";
import classnames from "classnames";

type Props = {
  value?: string;
  status?: CharStatus;
  isWerewolf?: boolean;
};

export const Cell = ({ value, status, isWerewolf }: Props) => {
  const classes = classnames(
    "w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded",
    {
      "bg-white border-slate-200": !status,
      "bg-slate-400 text-white border-slate-400": status === "absent",
      "bg-green-500 text-white border-green-500": status === "correct",
      "bg-yellow-500 text-white border-yellow-500": status === "present",
      "border-red-500": isWerewolf === true,
    }
  );

  return (
    <>
      <div className={classes}>{value}</div>
    </>
  );
};
