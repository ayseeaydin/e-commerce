import Categories from '../components/Categories/Categories';
import Footer from '../components/layout/Footer/Footer';
import Header from '../components/layout/Header/Header';
import Products from '../components/Products/Products';
import Sliders from '../components/Slider/Sliders';
import Campaigns from '../components/Campaigns/Campaigns';
import Blogs from '../components/Blogs/Blogs';
import Brands from '../components/Brands/Brands';
import CampaignSingle from '../components/CampaignSingle/CampaignSingle';
import React from 'react';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <Sliders />
            <Categories />
            <Products />
            <Campaigns />
            <Products />
            <Blogs />
            <Brands />
            <CampaignSingle />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;