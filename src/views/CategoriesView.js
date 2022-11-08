import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'


const CategoriesView = () => {
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Categories" />
      <FooterSection />
    </>
  )
}

export default CategoriesView