import AreaCard from "./area-card";

const AreaContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Property Locations 
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          We server many areas in New England and have number of properties ready to be sold. Seleact area to see the properties and its details.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Connecticut"
              propBackgroundImage="url('/card-1@3x.png')"
            />
            <AreaCard
              cityName="New York"
              propBackgroundImage="url('/card-2@3x.png')"
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              cityName="Massachusetts"
              propBackgroundImage="url('/card-3@3x.png')"
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="New Jersey"
              propBackgroundImage="url('/card-4@3x.png')"
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <AreaCard
              cityName="Florida"
              propBackgroundImage="url('/card-5@3x.png')"
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
