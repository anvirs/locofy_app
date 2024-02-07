const PropertyCard = ({ imgUrl, name, price }) => {
  return (
    <div className="rounded-3xs bg-gray-white box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] text-left text-mini-5 text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
    <img
      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
      alt=""
      src={imgUrl}
    />
    <div className="self-stretch flex flex-row items-start justify-start p-2.5">
      <div className="flex-1 relative leading-[20.32px] font-medium">
        {name}
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
      <div className="relative leading-[18.98px] font-semibold">
        $ {price}
      </div>
    </div>
      <div className="flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.4px] h-[17.4px] object-cover"
            alt=""
            src="/car@2x.png"
          />
          <div className="leading-[16.27px] font-medium">4</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.4px] h-[17.4px] object-cover"
            alt=""
            src="/bathtub@2x.png"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="w-[17.4px] h-[17.4px] object-cover"
            alt=""
            src="/arrowsout@2x.png"
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft o
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 shrink-0 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="w-[14.5px] h-[14.5px] object-cover"
              alt=""
              src="/sharenetwork@2x.png"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 shrink-0 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="w-[14.5px] h-[14.5px] object-cover"
              alt=""
              src="/heart@2x.png"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 shrink-0 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="w-[14.5px] h-[14.5px] object-cover"
              alt=""
              src="/plus@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
