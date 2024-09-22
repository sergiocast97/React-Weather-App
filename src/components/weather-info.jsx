import { DropletIcon, WindIcon } from "./icons";

export default function WeatherInfo({ icon, description, temperature, humidity, windSpeed }){
 return(
    <div>

        {/* Extract Icon from Open Weather's API based on Weather object */}
        <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="" 
            className="mx-auto"
        />
        
        {/* Temperature as passed by props */}
        <h2 className="font-heading text-7xl text-center font-black flex items-start justify-center text-theme-white">
            {temperature}
            <span className="body-2xl font-bold text-theme-lightest">°C</span>
        </h2>

        {/* Description as passed by props */}
        <h5 className="body-xl text-center mt-2 mb-8 font-medium text-white capitalize">
            {description}
        </h5>

        <div className="flex justify-between px-4 gap-x-4">

            {/* Moisture */}
            <div className="w-1/2 flex gap-x-2 items-center">
                <DropletIcon />
                <div className="flex flex-col gap-1">
                    <span className="font-medium body-xl leading-none text-theme-white">{humidity}</span>
                    <div className="body-md leading-none">Moisture</div>
                </div>
            </div>
            
            {/* Wind Speed */}
            <div className="w-1/2 flex gap-x-2 items-center">
                <WindIcon />
                <div className="flex flex-col gap-1" >
                    <span className="font-medium body-xl leading-none text-theme-white">{windSpeed}</span>
                    <div className="body-md leading-none">Wind</div>
                </div>
            </div>

        </div>
    </div>
 )
}