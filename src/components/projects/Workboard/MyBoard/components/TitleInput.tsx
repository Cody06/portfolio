import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { MAX_BOARD_TITLE_LENGTH } from '../../data';
import useStore from '../../Store';
import useOutsideClick from '@/hooks/useOutsideClick';
import { opaqueIconStyle } from '../../ui/tailwindStyles';

type Props = {
    boardId: string;
    boardTitle: string;
    setIsEditingTitle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TitleInput({ boardId, boardTitle, setIsEditingTitle }: Props) {
    const [newTitle, setNewTitle] = useState(boardTitle);
    const { editBoard } = useStore();

    const clearInputAndClose = () => {
        setNewTitle('');
        setIsEditingTitle(false);
    };
    const ref = useOutsideClick(() => clearInputAndClose());

    return (
        <div ref={ref} className="flex gap-x-3">
            <input
                type="text"
                className="rounded-md px-1"
                maxLength={MAX_BOARD_TITLE_LENGTH}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={clearInputAndClose}>
                <FontAwesomeIcon className={opaqueIconStyle} icon={faXmark} size="xl" />
            </button>
            <button
                onClick={() => {
                    editBoard(boardId, newTitle);
                    setIsEditingTitle(false);
                }}
            >
                <FontAwesomeIcon className={opaqueIconStyle} icon={faCheck} size="xl" />
            </button>
        </div>
    );
}
