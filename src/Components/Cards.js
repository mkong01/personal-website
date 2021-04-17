import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import pic1 from '../images/about_picture.jpg'

function Cards() {
    return (
        <div className = 'cards'>
            <div className = "cards__container">
                <div className = "cards__wrapper">
                    <ul className = "cards__items">
                        {/* to add another card, just copy and paste it */}
                        {/* if you want another row, add another ul tag */}
                        <CardItem
                        src = {pic1}
                        text = "Learn more about me here!"
                        label = 'About'
                        path = '/about'
                        />
                        <CardItem
                        src = "images/img-3.jpg"
                        text = "Learn more about my past projects here!"
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
