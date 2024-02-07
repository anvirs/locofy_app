import PropertyRentCard from "./property-rent-card";

const RentPropertiesContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties for Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          We serve many areas in New England and have a number of properties ready to be Rent. Select an area to view the properties and their details."
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px] text-left text-mini-5 text-gray-700">
          <PropertyRentCard imgUrl="./property-image@2x.png" name="92 Allium Place, Orlando FL" price="590,632"/>
          <PropertyRentCard imgUrl="./property-image@2x.png" name="92 Allium Place, Orlando FL" price="590,632"/>
          <PropertyRentCard imgUrl="./property-image@2x.png" name="92 Allium Place, Orlando FL" price="590,632"/>
          <PropertyRentCard imgUrl="./property-image@2x.png" name="92 Allium Place, Orlando FL" price="590,632"/>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
