import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'

const ProductsView = () => {
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <FooterSection />
    </>
  )
}

export default ProductsView