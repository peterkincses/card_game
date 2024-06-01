export type CardStackProps = {
    cards: CardProps[];
}

export type CardProps = {
    suit: string;
    rank: string;
    value?: number;
    showValue?: boolean;
}