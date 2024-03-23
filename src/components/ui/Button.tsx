import Link from 'next/link';
import React from 'react';

type Props = {
    label: string;
    disabled?: boolean;
    href?: string;
    kind?: 'primary' | 'secondary';
    type?: 'button' | 'link';
    onClick?: () => void;
};

export default function Button({
    label,
    onClick,
    disabled = false,
    href,
    kind = 'primary',
    type = 'button',
}: Props) {
    const kindStyle = {
        primary: `text-white bg-neutral-800
            hover:text-neutral-800 hover:bg-amber-500
            active:brightness-75`,
        secondary: `border border-amber-500
            hover:text-white hover:bg-amber-500
            active:brightness-75`,
    };

    const disabledStyle = 'text-neutral-500 bg-neutral-100';

    // Need isBtnDisabled arg for when we want to disable if it's a link and no href
    const ButtonElement = (isBtnDisabled: boolean) => (
        <button
            className={`p-3 rounded-3xl shadow-lg active:shadow-none ease-in duration-200 ${
                isBtnDisabled ? disabledStyle : kindStyle[kind]
            }`}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );

    const LinkElement = href ? (
        <Link
            href={href}
            className={`p-3 rounded-3xl shadow-lg active:shadow-none ease-in duration-200 ${kindStyle[kind]}`}
        >
            {label}
        </Link>
    ) : (
        ButtonElement(true)
    );

    switch (type) {
        case 'button':
            return ButtonElement(disabled);
        case 'link':
            return LinkElement;
        default:
            return ButtonElement(disabled);
    }
}
