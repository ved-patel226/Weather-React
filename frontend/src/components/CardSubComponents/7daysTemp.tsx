interface DaysTempProps {
  temp7Days: { [key: string]: number[] };
  index: string;
}

function DaysTemp({ temp7Days, index }: DaysTempProps) {
  return (
    <>
      <h2 className="font-semibold">{temp7Days[index]}&#176;</h2>
    </>
  );
}

export default DaysTemp;
