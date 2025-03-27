import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function Home() {

  return (
    <div className="container mx-auto main-layout bg-gray-900 min-h-screen" data-theme="light">
      <Header 
        title="Welcome to your bookshelf"
        slogan="The best place to buy your favorite books"
      />
      <ProductList className="content" />
      
    </div>
  )
}

export default Home
