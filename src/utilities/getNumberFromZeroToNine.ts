export default function getNumberFromZeroToNine(source: number) {
  return (
    source === 0
    ? 0
    : source % 9 === 0
    ? 9
    : source % 9
  );
}
