import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';

type Props = {
    defaultValue?: string;
    onSubmit: (input: string) => void;
};

export default function SearchInput({ defaultValue, onSubmit }: Props) {
    const [searchInput, setSearchInput] = useState(defaultValue ?? '');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(searchInput);
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Search here"
                maxLength={20}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="border-y border-l border-neutral-400 rounded-l-lg pl-2"
            />
            <button
                type="submit"
                className="mr-4 border-amber-600 rounded-r-lg bg-amber-600 px-4 py-2 text-white
                    hover:brightness-90"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
}
