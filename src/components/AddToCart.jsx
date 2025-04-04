import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

export default function AddToCart({book}) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItems({
      id: book.id,
      name: book.title,
      image: book.cover,
      price: book.price,
    }))

  }

  return (
    <button className="btn btn-primary px-8 py-5" onClick={addToCart}>
        <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
        <span className="font-thin ml-3">ADD TO BASKET</span>
    </button>
  );
 }