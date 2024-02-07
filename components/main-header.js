import React, { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import useWindowsize from "./hook/useWindowsize";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";

const menuItems = [
  { text: "HOME", link: "/" },
  { text: "ABOUT US", link: "/about" },
  { text: "PRO SERVICES", link: "/services" },
  { text: "RENTAL", link: "/properties" },
  { text: "PROPERTY-MANAGEMENT", link: "/gallery" },
  { text: "CLIENT TESTIMONIALS", link: "/blog" },
  { text: "CONTACT US", link: "/contact" },
  { text: "SEARCH", link: "/search" },
];

const MainHeader = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const windowSize = useWindowsize(); // Custom hook to get window size

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-primary-500 font-body-regular-600">
        {windowSize.width <= 768 && (
          <div className=" menu-button" onClick={showDrawer}>
            <MenuFoldOutlined style={{ fontSize: "20px" }} />
          </div>
        )}
        <div className="shrink-0 flex flex-row items-center  gap-[8px]">
          <img
            className="relative w-11 h-11 object-cover"
            alt=""
            src="/houseline@2x.png"
          />
          <div className="shrink-0 flex flex-col items-start justify-start">
            <div
              className="relative leading-[24px] font-semibold"
            >
              Gritty Property Management
            </div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real Estate  & Related Services 
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={isDrawerVisible}
      >
        <div className="shrink-0 flex flex-col items-start gap-[30px] lg:hidden md:flex">
          <div className="flex justify-end w-full">
            <button className="p-2" onClick={onClose}>
              <CloseOutlined style={{ fontSize: "20px" }} />
            </button>
          </div>
          {menuItems.map((item) => (
            <Link key={item.text} href={item.link}>
              {/* Wrap the content of Link with an element (e.g., div) */}
              <div
                className={`relative leading-[22px] ${
                  item.bold && "font-semibold"
                }`}
              >
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      </Drawer>

      {/* Top Navigation */}
      {windowSize.width > 768 && (
        <div className=" shrink-0 flex flex-row items-center justify-end gap-[20px] text-sm text-primary-900 lg:hidden sm:hidden md:flex">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[20px] lg:hidden md:flex">
            {menuItems.map((item) => (
              <Link key={item.text} href={item.link}>
                {/* Wrap the content of Link with an element (e.g., div) */}
                <div
                  className={`relative leading-[22px] ${
                    item.bold && "font-semibold"
                  }`}
                >
                  {item.text}
                </div>
              </Link>
            ))}
            <button className="cursor-pointer border-none p-0 bg-transparent shrink-0 hidden flex-row items-center justify-center lg:flex">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default MainHeader;
