import Footer from "../components/footer";
import { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import MainHeader from "../components/main-header";

const AboutView = () => {
  return (
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-3xl text-gray-white font-body-regular-400">
      <MainHeader/>
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">
            Properties
          </div>
          <div className="text-base leading-[24px] text-whitesmoke-300 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">About Us</span>
          </div>
        </div>
       </div>
       <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50 p-8 bg-gray-900 rounded-lg">
        <p>Welcome to GrittyReality – Your Partner in Realizing Dreams and Transforming Spaces!</p>
        <p>Embark on a journey with us across the vibrant landscapes of Connecticut, New York, Massachusetts, Rhode Island, and New Jersey. GrittyReality is more than a real estate company; we are your dedicated companions in the realms of property management, rentals, sales, landscaping, and beyond.</p>
        <p>At GrittyReality, we believe in the extraordinary power of turning dreams into reality. Our commitment to excellence and passion for creating thriving communities set us apart. Whether you're seeking a place to call home, envisioning a property makeover, or exploring investment opportunities, we've got you covered.</p>
        <p>Discover the GrittyReality Advantage:</p>
        <ul className="">
          <li>🏡 Property Management: Entrust your properties to us, and experience seamless, worry-free management.</li>
          <li>🔍 Rental Solutions: Find the perfect rental space that suits your lifestyle and preferences.</li>
          <li>🏠 Sales Expertise: Navigate the real estate market with confidence, guided by our seasoned professionals.</li>
          <li>🌿 Landscaping Excellence: Transform outdoor spaces into captivating havens with our expert landscaping services.</li>
        </ul>
        <p>What sets us apart is not just what we do but how we do it. Our team of experts is dedicated to understanding your unique needs and aspirations, ensuring a personalized experience every step of the way.</p>
        <p>Join us at GrittyReality and let's bring your visions to life. Welcome to a world where dreams meet reality!</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutView;
