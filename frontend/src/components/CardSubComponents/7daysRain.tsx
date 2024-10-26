interface Rain7daysProps {
  rain7Days: { [key: string]: number[] };
}

function Rain7days({ rain7Days }: Rain7daysProps) {
  return (
    <div className="flex flex-row flex-nowrap justify-evenly ">
      {Object.keys(rain7Days).map((key) => (
        <div key={key} className="flex flex-col">
          {rain7Days[key] === "rain" ? (
            <div className="flex flex-col items-center gap-5">
              <img
                className="w-20 h-20 fill-black"
                src="https://www.svgrepo.com/show/43707/rain.svg"
                alt=""
              />
              <h2>{key}</h2>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <img
                className="w-20 h-20 fill-black"
                src="https://www.svgrepo.com/show/262480/clouds-cloud.svg"
                alt=""
              />
              <h1>{key}</h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Rain7days;
