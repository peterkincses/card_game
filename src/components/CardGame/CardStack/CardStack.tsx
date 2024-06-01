import './CardStack.css';
import Card from './Card';
import {CardProps} from '../types';

const CardStack = ({ cards }: { cards: CardProps[] }) => {
    return (
        <ul className="cards">
            {cards.map((card: CardProps, index: number) => (
                <Card 
                    key={index + card.suit + card.rank}
                    rank={card.rank}
                    suit={card.suit}
                />
            ))}
        </ul>
    );
};


export default CardStack;