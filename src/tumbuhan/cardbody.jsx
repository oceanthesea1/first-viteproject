import React from 'react';
import DeleteButton from './deletebutton';

function CardBody({nama, warna, lokasi, tumbuh}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>Nama: {nama}</p>
            <p>Warna: {warna}</p>
            <p>Lokasi: {lokasi}</p>
            <p>Tumbuh: {tumbuh}</p>
        </div>
    )
}

function Card({id, nama, warna, lokasi, tumbuh, onDelete}) {

    const cardStyles = {
        card: {
            border: '3.5px solid #000000', 
            borderRadius: '20px',
            padding: '20px',
            marginTop: '10px',
            marginBottom: '50px',
            marginLeft: '60px',
            marginRight: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }, 
        button: {
            marginTop: '25px', 
            marginBottom: '10px'
        }
    }

    return (
        <div style={cardStyles.card}>
            <CardBody nama={nama} warna={warna} lokasi={lokasi} tumbuh={tumbuh}/>
            <div style={cardStyles.button}>
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    )
}

export default Card