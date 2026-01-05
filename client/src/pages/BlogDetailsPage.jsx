import React from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import BlogDetails from "../components/BlogDetails/BlogDetails";


const BlogDetailsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <BlogDetails />
            <Footer />
        </React.Fragment>
    )
}

export default BlogDetailsPage;


