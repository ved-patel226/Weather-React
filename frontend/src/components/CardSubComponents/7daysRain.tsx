import DaysTemp from "./7daysTemp";

interface Rain7daysProps {
  rain7Days: { [key: string]: number[] };
  temp7Days: { [key: string]: number[] };
}

function Rain7days({ rain7Days, temp7Days }: Rain7daysProps) {
  return (
    <div className="flex flex-row flex-nowrap justify-evenly mt-10">
      {Object.keys(rain7Days).map((key) => (
        <div key={key} className="flex flex-col">
          {String(rain7Days[key]) === "rain" ? (
            <div className="flex flex-col items-center gap-5 backdrop-blur-lg p-4 rounded-lg">
              <img
                className="w-20 h-20 fill-black"
                src="https://www.svgrepo.com/show/43707/rain.svg"
                alt=""
              />
              <div className="text-center">
                <h2 className="font-bold">{key}</h2>
                <DaysTemp temp7Days={temp7Days} index={key} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5 backdrop-blur-lg p-4 rounded-lg">
              <img
                className="w-20 h-20 fill-black"
                src="https://www.svgrepo.com/show/262480/clouds-cloud.svg"
                alt=""
              />
              <div className="text-center">
                <h2 className="font-bold">{key}</h2>
                <DaysTemp temp7Days={temp7Days} index={key} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Rain7days;
