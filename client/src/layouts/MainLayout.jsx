import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import React from "react";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default MainLayout;

MainLayout.propTypes = {
    children: PropTypes.node
};