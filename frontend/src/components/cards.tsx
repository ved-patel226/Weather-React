import React from "react";
import Rain7days from "./CardSubComponents/7daysRain";

function Cards({ rain7Days }: CardProps) {
  const currentDate = new Date().toLocaleDateString();
  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="mx-auto max-w-5xl">
      <div className="card bg-base-100 image-full shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Weather"
          />
        </figure>
        <div className="card-body">
          <div className="w-fit">
            <h2 className="card-title text-5xl w-fit">{dayOfWeek}</h2>
            <h2 className="card-title text-2xl w-fit">{currentDate}</h2>
          </div>
          {/* Cloud/Rain cloud */}
          <Rain7days rain7Days={rain7Days} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
