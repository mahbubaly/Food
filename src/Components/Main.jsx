import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className={
            navigation.state && "loading"
        }>



            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;