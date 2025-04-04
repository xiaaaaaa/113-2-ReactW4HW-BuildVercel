import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingBasket } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";

function CartSummary() {
  // const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum) => sum, 0)
    : 0;
  // const toggleModal = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav
      onClick={toggleModal}
      className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer"
    >
      <div className="indicator">
        {cartItems.length > 0 && <span className="indicator-item badge badge-primary text-white">{cartItems.length}</span>}
        <ShoppingBasket strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform text-white" />
      </div>
      <p className="text-xs opacity-60 mt-[-4px] text-white">Shopping bag</p>
    </nav>
  );
}

export default CartSummary;