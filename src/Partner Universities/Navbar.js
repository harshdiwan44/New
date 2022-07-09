import React, { useState } from "react";

const Index = () => {
  const [activePage, setActivePage] = useState("");
  return (
    <div className="h-screen grid grid-cols-custom-sidenav-layout">
      <Sidenav activePage={activePage} setActivePage={setActivePage} />
      <Content activePage={activePage} />
    </div>
  );
};

const Sidenav = ({ activePage, setActivePage }) => (
  <div className="flex flex-col bg-white-900 text-black-50 px-6 py-4">
    <SidenavHeader />
    <SidenavMenu activePage={activePage} setActivePage={setActivePage} />
  </div>
);

const SidenavHeader = () => <div className="flex items-center ml-0 pb-8"></div>;

const SidenavMenu = ({ activePage, setActivePage }) => (
  <nav className="space-y-2 ">
    <NavItem
      activePage={activePage}
      link="#uk"
      title="UnitedKingdom"
      setActivePage={setActivePage}
    />
    <NavItem
      activePage={activePage}
      link="#usa"
      title="United States Of America"
      setActivePage={setActivePage}
    />
    <NavItem
      activePage={activePage}
      link="#canada"
      title="Canada"
      setActivePage={setActivePage}
    />
    <NavItem
      activePage={activePage}
      link="#others"
      title="Others"
      setActivePage={setActivePage}
    />
  </nav>
);

const NavItem = ({ activePage, link, svgIcon, title, setActivePage }) => (
  <a
    onClick={() => setActivePage(title)}
    href={link}
    className={`flex items-center no-underline text-black-50 hover:text-black-100 p-3 rounded-md ${
      activePage === title ? "bg-black-700" : ""
    }`}
  >
    <div className="font-bold pl-3">{title}</div>
  </a>
);

const Content = ({ activePage }) => (
  <div className="flex flex-col">
    <div className="text-xl font-bold text-gray-600  pt-6 pb-2 px-6">
      {activePage}
    </div>
  </div>
);

export default Index;
