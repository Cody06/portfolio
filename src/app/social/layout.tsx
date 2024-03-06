import Link from 'next/link';
import { Metadata } from 'next';
import Nav from '@/components/projects/Social/Nav';

export const metadata: Metadata = {
    title: {
        template: 'Social | %s',
        default: 'Social',
    },
    description: 'Social platform to connect with like minded people',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <header className="bg-blue-100">
                <div className="flex justify-between p-2 text-white max-w-[70rem] mx-auto">
                    <span className="text-2xl font-bold">Social</span>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </div>
            </header>
            <div className="flex flex-col md:flex-row p-4 gap-x-40 max-w-[70rem] mx-auto">
                <Nav />
                {children}
            </div>
        </body>
    );
}