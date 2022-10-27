import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})

    return (
        <section className="contact-form">
            <div className="container">
                <h2>Come in contact with us</h2>
                <form noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name"/>
                        <div className="errorMessage"></div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Mail"/>
                        <div className="errorMessage"></div>
                    </div>
                    <div className="textarea">
                        <textarea id="comment" placeholder="Comment"></textarea>
                        <div className="errorMessage"></div>
                    </div>
                    <div className="formBtn">
                        <button type="submit" className="btn-theme">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection