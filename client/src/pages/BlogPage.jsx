import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Blogs from '../components/Blogs/Blogs';

const BlogPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="blog-page">
                <Blogs />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default BlogPage;