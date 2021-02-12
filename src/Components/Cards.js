import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <div className = "cards__container">
                <div className = "cards__wrapper">
                    <ul className = "cards__items">
                        {/* to add another card, just copy and paste it */}
                        {/* if you want another row, add another ul tag */}
                        <CardItem
                        src = "images/img-9.jpg"
                        text = "Explore the hidden waterfall deep inside the Amazon Jungle"
                        label = 'Adventure'
                        path = '/services'
                        />
                        <CardItem
                        src = "images/img-2.jpg"
                        text = "Travel through the Islands of Bali in a Private Cruise"
                        label = 'Luxury'
                        path = '/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
