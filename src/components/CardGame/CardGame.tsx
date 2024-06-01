//import {useRef} from 'react';
import CardStack from './CardStack/CardStack';
import useCardGame from '../../hooks/useCardGame';

const CardGame = () => {
    const {
        cards, 
        drawnCards, 
        stackValue, 
        shuffleCards, 
        drawCard, 
        sortCards, 
        handleRestart, 
        maxDraw
    } = useCardGame();

    // const rendersNo = useRef(0);//using useRef to keep track of the number of renders

    // rendersNo.current = rendersNo.current + 1;
    // console.log('rendersNo.current', rendersNo.current);

    return (
        <div className="card-stack">
            <button onClick={shuffleCards}>
                Shuffle
            </button>
            <button onClick={drawCard} disabled={drawnCards.length === maxDraw}>
                Draw
            </button>
            <button onClick={sortCards} disabled={drawnCards.length <= 1}>
                Sort
            </button>
            <button onClick={handleRestart} disabled={drawnCards.length === 0}>
                Restart
            </button>
            <div>
                <h2>Deck</h2>
                <p>{cards.length} cards remaining</p>
            </div>
            {cards.length > 0 && (
                <div className="cardWrap">
                    <CardStack cards={cards} />
                </div>
            )}
            {drawnCards.length > 0 && (
                <div>
                    <h3>Drawn Cards</h3>
                    <p>
                        {drawnCards.length} card{drawnCards.length > 1 && 's'} drawn
                        ({maxDraw - drawnCards.length} remaining)
                    </p>
                    <p>Stack value: {stackValue}</p>
                    <CardStack cards={drawnCards} />
                </div>
            )}
        </div>
    );
};


export default CardGame;