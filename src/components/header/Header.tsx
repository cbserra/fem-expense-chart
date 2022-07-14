import { useSpendingContext } from "context/SpendingContext";
import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  const { balance } = useSpendingContext();
  return (
    <header>
      <div className="heading">
        <h2 className="balance-label">My balance</h2>
        <span className="balance-value">${balance}</span>
      </div>
      <Logo />
    </header>
  );
};

export default Header;
