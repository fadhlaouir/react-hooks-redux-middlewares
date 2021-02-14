import React from 'react'

function Home() {
    return (
        <div>
            <div className="cart">
                <h1>Cart: 0</h1>
            </div>

            <div className="item">
                <img src="https://www.91-img.com/pictures/133378-v3-samsung-galaxy-s11-mobile-phone-large-1.jpg?tr=q-60" alt="img" width="100px" height="120px" />
                <span>Samsung</span>
                <span>Price: 1000TND</span>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Home 