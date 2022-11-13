import React, {useContext} from 'react' 
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import ProductGridSection from '../sections/ProductGridSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import WebInfoSection from '../sections/WebInfoSection'
import FooterSection from '../sections/FooterSection'
import { FeaturedProductsContext, ProductContext } from '../contexts/contexts'




const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(ProductContext)
  const featured = useContext(FeaturedProductsContext)


  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" items={featured} />
      <TopPicksSection />
      <FlashSaleSection products={products}/>
      <WebInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView