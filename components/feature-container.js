import InfoCard from "./info-card";

const FeatureContainer = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Property Managment Services 
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Let us Manage your real estate investments by provide various property managment services including 24/7 maintenance, Automated owner Managment, Home Improvements, Legal , Marketing
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard
            listingImageId="/icon@2x.png"
            homeActionText="Property Management"
            homeActionTextInfo="Real estate managment services including 24/7 maintenance"
            propFlexShrink="0"
            propFlexShrink1="0"
          />
          <InfoCard
            listingImageId="/icon@2x.png"
            homeActionText="Property Maintenance"
            propFlexShrink="unset"
            propWidth="312px"
            propFlexShrink1="unset"
          />
          <InfoCard
            listingImageId="/icon@2x.png"
            homeActionText="Marketing"
            propFlexShrink="0"
            propWidth="unset"
            propFlexShrink1="0"
          />
          <InfoCard
            listingImageId="/icon@2x.png"
            homeActionText="Legal Help"
            propFlexShrink="unset"
            propWidth="312px"
            propFlexShrink1="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
