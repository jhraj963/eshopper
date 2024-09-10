import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Sidebar() {

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
        <div className="col-sm-3">
            <div className="left-sidebar">
                <h2>Category</h2>
                <div className="panel-group category-products" id="accordian">
                    {/* <!--category-productsr--> */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                    Sportswear
                                </a>
                            </h4>
                        </div>
                        <div id="sportswear" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">Nike </a></li>
                                    <li><a href="#">Under Armour </a></li>
                                    <li><a href="#">Adidas </a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">ASICS </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                    Mens
                                </a>
                            </h4>
                        </div>
                        <div id="mens" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">Fendi</a></li>
                                    <li><a href="#">Guess</a></li>
                                    <li><a href="#">Valentino</a></li>
                                    <li><a href="#">Dior</a></li>
                                    <li><a href="#">Versace</a></li>
                                    <li><a href="#">Armani</a></li>
                                    <li><a href="#">Prada</a></li>
                                    <li><a href="#">Dolce and Gabbana</a></li>
                                    <li><a href="#">Chanel</a></li>
                                    <li><a href="#">Gucci</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                    Womens
                                </a>
                            </h4>
                        </div>
                        <div id="womens" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">Fendi</a></li>
                                    <li><a href="#">Guess</a></li>
                                    <li><a href="#">Valentino</a></li>
                                    <li><a href="#">Dior</a></li>
                                    <li><a href="#">Versace</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Kids</a></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Fashion</a></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Households</a></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Interiors</a></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Clothing</a></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Bags</a></h4>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#">Shoes</a></h4>
                        </div>
                    </div>
                </div>
                {/* <!--/category-products--> */}

                <div className="brands_products">
                    {/* <!--brands_products--> */}
                    <h2>Brands</h2>
                    <div className="brands-name">
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="#"> <span className="pull-right">(50)</span>Acne</a></li>
                            <li><a href="#"> <span className="pull-right">(56)</span>Grüne Erde</a></li>
                            <li><a href="#"> <span className="pull-right">(27)</span>Albiro</a></li>
                            <li><a href="#"> <span className="pull-right">(32)</span>Ronhill</a></li>
                            <li><a href="#"> <span className="pull-right">(5)</span>Oddmolly</a></li>
                            <li><a href="#"> <span className="pull-right">(9)</span>Boudestijn</a></li>
                            <li><a href="#"> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!--/brands_products--> */}

                <div className="price-range">
                    {/* <!--price-range--> */}
                    <h2>Price Range</h2>
                    <div className="well text-center">
                        <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                        <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
                    </div>
                </div>
                {/* <!--/price-range--> */}

                <div className="shipping text-center">
                    <img src="assets/images/home/shipping.jpg" alt="" />
                </div>
                {/* <!--/shipping--> */}

            </div>
        </div>
    )
}

export default Sidebar