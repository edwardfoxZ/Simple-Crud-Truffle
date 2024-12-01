import React from "react";

export default function Navbar() {
  const ConnectToWallet = async () => {
    await window.ethereum.then(() => {
      window.ethereum.enable();
    });

    if (typeof window.ethereum != "undefined") {
      return "connected to the metamask!";
    } else {
      alert("please install metamask! ");
    }
  };

  return (
    <nav className="w-100 h-25 bg-dark d-flex text-white fs-5">
      <div dir="rtl" className="d-flex flex-row gap-5 p-4">
        <p>account</p>
        <button onClick={ConnectToWallet} style={{ textDecoration: "none" }}>
          Connect
        </button>
      </div>
    </nav>
  );
}
