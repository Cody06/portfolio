import { useState } from 'react';
import { CardData } from '../../types';
import useStore from '../../Store';

type Props = {
    boardId: string;
    listId: string;
    card: CardData;
};

export default function Card({ boardId, listId, card }: Props) {
    const [text, setText] = useState(card.text);
    const [isDragging, setIsDragging] = useState(false);
    const { listToDropCard, appendCard, deleteCard, editCard, insertCardBeforeAnother } =
        useStore();

    const handleClickOutside = () => {
        if (text.length === 0) {
            deleteCard(boardId, listId, card.id);
        } else {
            editCard(boardId, listId, card.id, text);
        }
    };

    const handleDrop = (dropCard: CardData) => {
        if (listToDropCard.nextCardId) {
            insertCardBeforeAnother(boardId, dropCard);
        } else {
            appendCard(boardId, dropCard);
        }
    };

    return (
        <div
            id={card.id}
            className={`draggable group flex gap-x-1 max-h-44 bg-white rounded-md shadow-md ${
                isDragging && 'opacity-20 dragging'
            }`}
            draggable
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                setIsDragging(false);
                handleDrop(card);
            }}
            onBlur={handleClickOutside}
        >
            <div
                className="w-full p-2"
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => setText(e.currentTarget.innerHTML)}
            >
                {/* Use the prop and NOT the text state value */}
                {card.text}
            </div>
        </div>
    );
}
