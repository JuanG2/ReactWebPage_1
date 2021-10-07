import React from 'react'
import CardItem from './CardItem';
import './Cards.scss';
import "../images/img-1.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Look at some of this proyects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                      <CardItem  src={require('../images/img-3.jpg').default}
                      text="Explore the outer space in this proyect created with Maya"
                      label="3DModels"
                      path="/services"
                      />
                      <CardItem  src={require('../images/img-4.jpg').default}
                      text="See this web pages created entirely with react"
                      label="Design and Code"
                      path="/proyects"
                      />
                      <CardItem  src={require('../images/img-8.jpg').default}
                      text="Explore the adventure of oil and recycling with this inmersive app"
                      label="Mobile Aplications"
                      path="/services"
                      />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
