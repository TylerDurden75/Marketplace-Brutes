import React, {useContext, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {DataContext} from './Data.Provider';
import Colors from './Colors';
import Classes from './Classes';
import DetailsThumb from './Details.Thumb';
 
function Details() {
    const {id} = useParams();
    const [NFT] = useContext(DataContext);
    const [index, setIndex] = useState(0);
    const imgDiv = useRef();

    const details = NFT.filter((nft, index) =>{
        return nft._id === id

    })

    const handleMouseMove = e => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX -left) / width * 100;
        const y = (e.pageY -top) / height * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
    }



    return (
        <>
            {
                details.map(nft =>(
                    <div className="details" key={nft._id}>
                        <div className="img-container" onMouseMove={handleMouseMove}
                        style={{backgroundImage: `url(${nft.images[index]})`}}
                        ref={imgDiv} 
                        onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}/>

                        <div className="box-details">
                            <h2 title={nft.title}>{nft.title}</h2>
                            <h3>{nft.price} ETH</h3>
                            <Colors colors={nft.colors}/>
                            <Classes classes={nft.classes}/>
                            <p>{nft.description}</p>
                            <p>{nft.content}</p>
                            <DetailsThumb images={nft.images} setIndex={setIndex}/>
                            <button className="cart">Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Details
