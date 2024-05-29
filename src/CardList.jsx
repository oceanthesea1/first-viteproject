import React from 'react';
import Card from './CardGroup';

function CardList({myBiodata, onDelete}) {
    return (
        <div className="card-list">
            {myBiodata.map((siswa) => (
                <Card 
                {...siswa} 
                key={siswa.id}
                id={siswa.id}
                onDelete={onDelete} />
            ))}
        </div>
    )
}  

export default CardList