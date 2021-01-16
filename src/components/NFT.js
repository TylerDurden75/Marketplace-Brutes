import React, {useContext} from 'react';
import {DataContext} from './Data.Provider';
import {Link} from 'react-router-dom';

function NFT() {
    const [NFT] = useContext(DataContext);
    

    return (
        <div className="NFT">
            {
                NFT.map(nft =>(
                    <div className="card" key={nft._id}>
                        <Link to={`/squad/${nft._id}`}>
                            <img src={nft.images[0]} alt=""/>
                        </Link>
                        <div className="box">
                        <h3 title={nft.title}>
                            <Link to={`/squad/${nft._id}`}>{nft.title}</Link>
                        </h3>
                        <p>{nft.description}</p>
                        <h4>{nft.price} ETH</h4>
                        <button>Add to cart</button>
                        </div>
                  </div>
                ))
            }
         
        </div>
    )
}

export default NFT;
