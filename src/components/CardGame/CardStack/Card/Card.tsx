import React from 'react'; 
import { CardProps } from '../../types';

const imgPath = '//deckofcardsapi.com/static/img/';

const Card = (card: CardProps) => {
    const { rank, suit, value } = card;
    const img = `${rank === '10' ? 0 : rank}${suit[0].toUpperCase()}.png`;
    return (
        <li data-suit={suit} data-rank={rank}>
            <img src={imgPath + img}
                alt={`${rank} of ${suit}`}
                width="100"
            />
            {value && <span>{value}</span>}
        </li>
    )
}

export default Card;