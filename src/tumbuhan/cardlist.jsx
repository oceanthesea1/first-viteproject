import React from 'react';
import Card from './cardbody';

function CardList({listTumbuhan, onDelete}) {
    const cardStyles = {
        cardList: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
        }
    }
    return (
        <div style={cardStyles.cardList}>
            {listTumbuhan.map((tumbuhan) => (
                <Card 
                {...tumbuhan} 
                key={tumbuhan.id}
                id={tumbuhan.id}
                onDelete={onDelete} />
            ))}
        </div>
    )
}  

export default CardList