import { GiChargingBull } from "react-icons/gi";
import UserIcon from "./UserIcon";
import Menu from "./Menu";

export default function AppHeader({}: {}) {
  return (
    <header
      className="
        flex w-full p-2 md:px-10
        items-center justify-between
      "
    >
      <div
        className="
          flex space-x-5
          items-center
        "
      >
        <GiChargingBull className="icon-large" />
        <h1 className="title-large">NFT Stock</h1>
      </div>
      <Menu />
      <UserIcon />
    </header>
  );
}
