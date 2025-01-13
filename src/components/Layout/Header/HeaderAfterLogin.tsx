import { CountryDropdown } from "@/components/ui/country-dropdown";
import React from "react";
import Cart from "../Cart/Cart";
import { Badge } from "@/components/ui/badge";
interface HeaderAfterLoginProps {
  className?: string;
}
const HeaderAfterLogin = ({ className }: HeaderAfterLoginProps) => {
  // const { handleCartClick } = useShoppingCart();

  return (
    // <div className={`p-5 ${className}`}>HeaderAfterLogin</div>
    <div className={`flex p-5 mr-10 justify-end items-center gap ${className}`}>
      <Badge variant="outline" className="text-sm font-normal">
        100 $
      </Badge>
      <CountryDropdown
        placeholder="Select country"
        defaultValue="USA"
        onChange={(e) => console.log(e)}
        slim
      />
      <Cart />
    </div>
  );
};

export default HeaderAfterLogin;
