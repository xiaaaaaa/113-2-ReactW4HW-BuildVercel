
import { useParams } from 'react-router';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import books from "../json/books.json";

function Product() {

   const { bookId } = useParams();
   const book = books.find(
      (x) => x.id === bookId
   );

   return (
      <div className="container mx-auto main-layout bg-gray-900"  data-theme="light">
         <Header
            title="Books Detail"
            slogan="I believe you will not read this paragraph carefully."
         />
         <ProductDetail book={book} className="content" />
         
      </div>
   );
}

export default Product;
