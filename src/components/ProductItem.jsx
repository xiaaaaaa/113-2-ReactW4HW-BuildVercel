/* eslint-disable react/prop-types */
import { Link } from 'react-router';

function ProductItem({ book }) {
   return (
      <section className="pt-4 px-3 lg:px-4">
         <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md shadow-neutral-500/50">
            <Link to={`/books/id/${book.id}`}>
               <img className="w-full" src={book.cover} alt={book.title} />
            </Link>
            <div className="p-4">
               <h6 className="text-white text-xl mb-1">
                  {book.title}
               </h6>
               <h5 className="text-white text-sm opacity-80 mb-5">
                  {book.author}
               </h5>
               <p className="text-white text-sm  opacity-70 mb-4">{book.summary}</p>
               <div className="flex justify-between flex-wrap">
                  <Link to={`/books/id/${book.id}`} className="no-underline text-gray-500 flex items-center">
                     See More
                     <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                     </svg>
                  </Link>
                  <span className="text-yellow-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                     ${book.price}
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
}


export default ProductItem;