import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ProductContext } from '../../context/ProductsContext.context';
import { User } from '../../context/UserContext.context';
import { fireSignout } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(User);
  const {products} = useContext(ProductContext)
  const handleSignout = async ()=>{
    await fireSignout();
    setCurrentUser(null);
  }
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
            
          </Link>
          {
            currentUser?(
          <div onClick={handleSignout}  className='nav-link'>
            SIGN OUT
          </div>

            ):(
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>

            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
