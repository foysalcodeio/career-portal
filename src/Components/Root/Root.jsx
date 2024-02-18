import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='bg-white'>
            <div className=' w-4/6 mx-auto'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;