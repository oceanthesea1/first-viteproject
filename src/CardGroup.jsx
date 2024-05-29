import React from 'react';

function CardBody({nama, kelas, alamat}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>{nama}</p>
            <p>{kelas}</p>
            <p>{alamat}</p>
        </div>
    )
}

function CardImage({foto}) {
    const imageStyles = {
        image: {
            borderRadius: '7%',
            overflow: 'hidden'
        }
    };

    return (
        <img src={foto} alt='profile' height={150} width={150} style={imageStyles.image}/>
    )
}

function DeleteButton({ id, onDelete }) {
    const buttonStyles = {
        button: {
            backgroundColor: '#90FFFF', 
            color: '#000000', 
            borderRadius: '5px', 
            padding: '10px 20px', 
            cursor: 'pointer', 
            fontSize: '16px', 
            fontWeight: 'bold', 
        },
    };

    return (
        <button className='card_delete' style={buttonStyles.button} onClick={() => onDelete(id)}>
            X
        </button>
    );
}

function Card({id, nama, kelas, alamat, foto, onDelete}) {

    const cardStyles = {
        card: {
            border: '3px solid #000000', 
            borderRadius: '10px',
            padding: '20px',
            paddingLeft: '40px', 
            paddingRight: '40px', 
            marginBottom: '60px',
        }
    }

    return (
        <div className='card' style={cardStyles.card}>
            <CardBody nama={nama} kelas={kelas} alamat={alamat}/>
            <CardImage foto={foto}/>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default Card