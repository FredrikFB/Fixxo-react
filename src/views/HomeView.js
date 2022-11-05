import React, {useState, useContext} from 'react' //kan ta bort {useState} när jag gör klart sen
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import ProductGridSection from '../sections/ProductGridSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import FooterSection from '../sections/FooterSection'
import { ProductContext } from '../contexts/contexts'



const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(ProductContext)

  const [topProducts, setTopProducts] = useState([ //behövs inte längre
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?cs=srgb&dl=pexels-paula-schmidt-963486.jpg&fm=jpg&_gl=1*c4smps*_ga*NDYzNDMwOTUxLjE2NjY2ODk1NzA.*_ga_8JE65Q40S6*MTY2NjY5MzQ3OC4yLjEuMTY2NjY5MzU4Mi4wLjAuMA.."},
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "$40.00", rating: 5, img: "https://images.pexels.com/photos/2655461/pexels-photo-2655461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "$40.00", rating: 5, img: "https://images.pexels.com/photos/1009354/pexels-photo-1009354.jpeg?cs=srgb&dl=pexels-pille-kirsi-1009354.jpg&fm=jpg&_gl=1*st0c4n*_ga*NDYzNDMwOTUxLjE2NjY2ODk1NzA.*_ga_8JE65Q40S6*MTY2NjY5MzQ3OC4yLjEuMTY2NjY5NDAyOC4wLjAuMA.."},
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", oldPrice: "", rating: 5, img: "https://images.pexels.com/photos/3933903/pexels-photo-3933903.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3933903.jpg&fm=jpg&_gl=1*1x1zjhp*_ga*NDYzNDMwOTUxLjE2NjY2ODk1NzA.*_ga_8JE65Q40S6*MTY2NjY5MzQ3OC4yLjEuMTY2NjY5NDEwNi4wLjAuMA.."}
  ])

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      {/* <ProductGridSection title="Top Products" products={topProducts} /> */}
      <TopPicksSection />
      <FlashSaleSection products={topProducts}/>
      <FooterSection />
    </>
  )
}

export default HomeView