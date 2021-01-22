import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="image_desktop"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/family/17th-Nov/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600_2._CB415252218_.jpg" alt="offers"
                />
                <img
                    className="image_mobile"
                    src="https://i02.appmifile.com/144_operator_in/16/11/2020/78a69de865d35c5d1037fbd475e9ee37.jpg" alt="offers"
                />


                <div className="home_row">
                    <Product 
                        id="484411745"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price="20,999"
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                    
                </div>

                <div className="home_row">
                    <Product
                        id="484687656"
                        title="Reebok Men's Emergo Runner Lp Running Shoes"
                        price="2,499"
                        image="https://images-na.ssl-images-amazon.com/images/I/71w2CJEOLZL._UL1500_.jpg"
                        rating={4}
                        isSecondlane
                    />
                    <Product 
                        id="6526654982"
                        title="LG 7 Kg 4 Star Semi-Automatic Top Loading Washing Machine (P7020NGAY, Dark Gray, Collar scrubber)"
                        price="11,900"
                        image="https://m.media-amazon.com/images/I/81KDKQkSXFL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                        isSecondlane
                    />
                    <Product 
                        id="8924648"
                        title="Cadbury Dairy Milk Silk Chocolate Bar, 150g (Pack of 3)"
                        price="446"
                        image="https://m.media-amazon.com/images/I/61eluXgdNdL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                        isSecondlane
                    />
                    <Product 
                        id="464642698"
                        title="Milton Duo DLX 1000 Thermosteel 24 Hours Hot and Cold Water Bottle, 1 Litre, Silver"
                        price="866"
                        image="https://m.media-amazon.com/images/I/61c-GtJ+0eL._AC_UL480_FMwebp_QL65_.jpg"
                        rating="{4}"
                        isSecondlane
                    />
                </div>

                <div className="home_row">
                    
                    <Product 
                        id="2154526"
                        title="Napolean Hill THINK and GROW RICH"
                        price="299"
                        image="https://m.media-amazon.com/images/I/91mJmoqx5zL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                        isSecondlane
                    />
                    <Product
                        id="5648719"
                        title="Samsung Galaxy S10 (Prism Blue, 8GB RAM, 128GB Storage)"
                        price="34,999"
                        image="https://images-na.ssl-images-amazon.com/images/I/61BAVcOnyiL._SL1500_.jpg"
                        rating={4}
                        isSecondlane
                    />
                    <Product 
                        id="65489726"
                        title="A Promised Land Hardcover – 17 November 2020
                        by Barack Obama "
                        price="1,999"
                        image="https://images-na.ssl-images-amazon.com/images/I/41BvMv5otbL._SX327_BO1,204,203,200_.jpg"
                        rating={5}
                        isSecondlane
                    />
                    <Product 
                        id="41564987"
                        title="T2F Boys' Chest Printed Hooded Sweatshirt"
                        price="319"
                        image="https://images-na.ssl-images-amazon.com/images/I/91JTuwVaGOL._UL1500_.jpg"
                        rating={3}
                        isSecondlane
                    />
                    <Product 
                        id="48754651"
                        title="Rivoxx Probiker Synthetic Leather Motorcycle Gloves (Black, Medium)"
                        price="449"
                        image="https://m.media-amazon.com/images/I/71yRDPZsm7L._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                        isSecondlane
                    />
                </div>
            </div>
    </div>
    )
}

export default Home
