import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Policy from '../components/layout/Policy/Policy';
import Contact from '../components/Contact/Contact';


const ContactPage=()=>{
    return(
        <React.Fragment>
            <Header />
            <Contact/>
            <Policy/>
            <Footer/>
        </React.Fragment>
    )
}

export default ContactPage;