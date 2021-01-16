import React, {createContext, useState} from 'react';
import Archer from '../img/BRUTES_ARC_1.png';
import Wizzard from '../img/BRUTES_MAG_1.png';
import Orc from '../img/BRUTES_ORC_1.png';
import Warrior from '../img/BRUTES_WAR_1.png';
import BreedOrc from '../img/BRUTES_ORC_2.png';
import BreedWarrior from '../img/BRUTES_WAR_3.png';
import BreedArcher from '../img/BRUTES_ARC_4.png';
import EvoWizzard from '../img/BRUTES_MAG_4.png';
import EggWar from '../img/BRUTES_WAR_EG.png';
import BBWiz from '../img/BRUTES_MAG_BB.png';
import BBOrc from '../img/BRUTES_ORC_BB.png';
import BBArc from '../img/BRUTES_ARC_EG2.png';
import Weapon from '../img/WEAPON_Sword_G.png';


export const DataContext = createContext();

export const DataProvider = (props)=> {
    const [NFT, setNFT] = useState([
        {
            "_id":"1",
            "title": "ERC-666",
            "images": [Archer, Wizzard, Orc, Warrior],
            "description": "Archer Cat",
            "content": "Elven eyes known for chirurgical precision",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Agility", "Speed"],
            "price": 0.005
        },
        {
            "_id":"2",
            "title": "ERC-666",
            "images": [Wizzard],
            "description": "Wizzard Cat",
            "content": "A quiet strenght can hide great power",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Protection", "Speel"],
            "price": 0.005
        },
        {
            "_id":"3",
            "title": "ERC-666",
            "images": [Orc],
            "description": "Orc Cat",
            "content": "Don't mess with Orc he is the Roc",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Defense", "Protection"],
            "price": 0.005
        },
        {
            "_id":"4",
            "title": "ERC-666",
            "images": [Warrior],
            "description": "Warrior Cat",
            "content": "Brave and without fear",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Critical Hit", "Defense"],
            "price": 0.005
        },
        {
            "_id":"5",
            "title": "ERC-666",
            "images": [BreedOrc],
            "description": "Breed Orc",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Defense", "Protection", "Critical Hit", "SuperShield"],
            "price": 0.015
        },
        {
            "_id":"6",
            "title": "ERC-666",
            "images": [BreedWarrior],
            "description": "Breed Warrior",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Critical Hit", "Defense", "Speed", "Agility"],
            "price": 0.015
        },
        {
            "_id":"7",
            "title": "ERC-666",
            "images": [BreedArcher],
            "description": "Breed Archer",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Agility", "Speed", "Defense", "Critical Hit"],
            "price": 0.015
        },
        {
            "_id":"8",
            "title": "ERC-666",
            "images": [EvoWizzard],
            "description": "Evolve Wizzard",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["Protection", "Speel", "Magie", "SuperShield"],
            "price": 0.018
        },
        {
            "_id":"9",
            "title": "ERC-666",
            "images": [EggWar],
            "description": "Warrior Egg",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["brutes", "warrior"],
            "price": 0.0015
        },
        {
            "_id":"10",
            "title": "ERC-666",
            "images": [BBWiz],
            "description": "Newbie Wizzard",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["brutes", "warrior"],
            "price": 0.0022
        },
        {
            "_id":"11",
            "title": "ERC-666",
            "images": [BBOrc],
            "description": "Newbie Orc",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["brutes", "warrior"],
            "price": 0.0025
        },
        {
            "_id":"12",
            "title": "ERC-666",
            "images": [BBArc],
            "description": "Baby Archer",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["brutes", "warrior"],
            "price": 0.0018
        },
        {
            "_id":"13",
            "title": "ERC-666",
            "images": [Weapon],
            "description": "Baby Archer",
            "content": "blablbla bla bal",
            "colors": ["green", "blue", "yellow", "pink"],
            "classes": ["brutes", "warrior"],
            "price": 0.0018
        },
    ])

    return (
        <DataContext.Provider value={[NFT, setNFT]}>
            {props.children}
        </DataContext.Provider>
    )
}
