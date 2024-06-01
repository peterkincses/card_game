import { useState, useEffect } from 'react';
import { CardProps } from '../components/CardGame/types';

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const useCardGame = () => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [drawnCards, setDrawnCards] = useState<CardProps[]>([]);
    const maxDraw = 5;

    useEffect(() => {
        const deck = generateDeck();
        setCards(deck);
    }, []);

    const generateDeck = () => {
        const deck = [];

        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({ suit, rank });
            }
        }

        return deck;
    };

    // Shuffles the deck
    const shuffleCards = () => {
        const shuffledDeck = [...cards];
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        setCards(shuffledDeck);
    };

    // Draws a card from the deck
    const drawCard = () => {
        if (cards.length > 0) {
            const drawnCard = cards[Math.floor(Math.random() * cards.length) - 1];
            setCards(cards.filter(card => card !== drawnCard));
            setDrawnCards([...drawnCards, drawnCard]);
        }
    };

    // Sorts the drawn cards by suit and rank
    const sortCards = () => {
        const sortedDeck = [...drawnCards].sort((a, b) => {
            const suitComparison = suits.indexOf(a.suit) - suits.indexOf(b.suit);
            if (suitComparison !== 0) {
                return suitComparison;
            }

            return ranks.indexOf(a.rank) - ranks.indexOf(b.rank);
        });
        setDrawnCards(sortedDeck);
    };

    // Restarts the game by generating a new deck and resetting the drawn cards
    const handleRestart = () => {
        const deck = generateDeck();
        setCards(deck);
        setDrawnCards([]);
    }

    // Calculates the value of the drawn stack
    const stackValue = drawnCards.reduce((acc, card) => {
        const rankValue = ranks.indexOf(card.rank) + 1;
        return acc + rankValue;
    }, 0);

    return {
        cards: cards,
        drawnCards: drawnCards,
        stackValue: stackValue,
        shuffleCards: shuffleCards,
        drawCard: drawCard,
        sortCards: sortCards,
        handleRestart: handleRestart,
        maxDraw: maxDraw
    }
}

export default useCardGame;