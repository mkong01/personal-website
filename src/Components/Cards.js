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
                        src = "images/img-home.jpg"
                        text = "Click here to learn more about me!"
                        label = 'About'
                        path = '/about'
                        />
                        <CardItem
                        src = "images/img-3.jpg"
                        text = "Click here to learn more about my past projects!"
                        label = 'Projects'
                        path = '/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
