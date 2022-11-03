import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'
import ContactForm from '../sections/ContactForm'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactForm />
      {/* <ContactFormSection /> */}
      <FooterSection />
    </>
  )
}

export default ContactsView