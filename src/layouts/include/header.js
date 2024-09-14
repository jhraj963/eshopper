import React from 'react'
import { logout } from '../../Api/AllApi'
import { useLocation, Link,  useNavigate} from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
    const handelLogout = () => {
        logout();
        navigate('/Login');
    }
    const activeMenu = (e) => {
        document.querySelectorAll('.submenu').forEach(
            function (e) {
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if (childElement && childElement.classList.contains('submenu')) {
            childElement.classList.add('active');
        }
    }

    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }
    return (
        <header id="header" className='active'>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contactinfo">
                                <ul className="nav nav-pills">
                                    <li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                                    <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="social-icons pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header-middle">
                {/* <!--header-middle--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="logo pull-left">
                                <a href="index.html"><img src="/assets/images/home/logo.png" alt="" /></a>
                            </div>
                            <div className="btn-group pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                        USA
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Canada</a></li>
                                        <li><a href="#">UK</a></li>
                                    </ul>
                                </div>

                                <div className="btn-group">
                                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                        DOLLAR
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Canadian Dollar</a></li>
                                        <li><a href="#">Pound</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="shop-menu pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="#"><i className="fa fa-user"></i> Account</a></li>
                                    <li><a href="#"><i className="fa fa-star"></i> Wishlist</a></li>
                                    <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Checkout")}`}>
                                        <Link to="/Checkout" className="sidebar-link">
                                            <i data-feather="home" width="20"></i>
                                            <span>Checkout</span>
                                        </Link>
                                    </li>
                                    <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Cart")}`}>
                                        <Link to="/Cart" className="sidebar-link">
                                            <i data-feather="home" width="20"></i>
                                            <span>Cart</span>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <button type='button' className='btn btn-link' onClick={handelLogout}>Logout</button>
                                    </li> */}
                                    <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/login")}`}>
                                        <Link to="/login" className="sidebar-link" onClick={handelLogout}>
                                            <i data-feather="home" width="20"></i>
                                            <span>Logout</span>
                                        </Link>
                                    </li>
                                    {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Register")}`}>
                                        <Link to="/Register" className="sidebar-link">
                                            <i data-feather="home" width="20"></i>
                                            <span>Register</span>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/header-middle--> */}

            <div className="header-bottom">
                {/* <!--header-bottom--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="mainmenu pull-left">
                                <ul className="nav navbar-nav collapse navbar-collapse">
                                    <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/")}`}>
                                        <Link to={"/"} className={`sidebar-link`}>
                                            <i data-feather="home" width="20"></i>
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/all-products")}`}>
                                                <Link to="/all-products" className="sidebar-link">
                                                    <i data-feather="home" width="20"></i>
                                                    <span>All Products</span>
                                                </Link>
                                            </li>

                                            <li><a href="product-details.html">Product Details</a></li>
                                            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Checkout")}`}>
                                                <Link to="/Checkout" className="sidebar-link">
                                                    <i data-feather="home" width="20"></i>
                                                    <span>Checkout</span>
                                                </Link>
                                            </li>
                                            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Cart")}`}>
                                                <Link to="/Cart" className="sidebar-link">
                                                    <i data-feather="home" width="20"></i>
                                                    <span>Cart</span>
                                                </Link>
                                            </li>
                                            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/login")}`}>
                                                <Link to="/login" className="sidebar-link">
                                                    <i data-feather="home" width="20"></i>
                                                    <span>Login</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/BlogList")}`}>
                                                <Link to="/BlogList" className="sidebar-link">
                                                    <i data-feather="home" width="20"></i>
                                                    <span>Blog List</span>
                                                </Link>
                                            </li>
                                            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/BlogSingle")}`}>
                                                <Link to="/BlogSingle" className="sidebar-link">
                                                    <i data-feather="home" width="20"></i>
                                                    <span>Blog Single</span>
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>
                                    {/* <li><a href="404.html">404</a></li> */}
                                    <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/contact-us")}`}>
                                        <Link to="/contact-us" className="sidebar-link">
                                            <i data-feather="home" width="20"></i>
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="search_box pull-right">
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/header-bottom--> */}
        </header>
        // <!-- / header-- >
    )
}

export default Header