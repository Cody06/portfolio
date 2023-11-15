'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import Nav from './components/Nav';

const Social = () => {
    const initialPosts = [
        {
            id: '1',
            date: new Date('2023-10-12').toDateString(),
            creator: 'cody',
            content: 'Hello and welcome to Social!',
            likes: 0,
        },
        {
            id: '2',
            date: new Date('2023-10-12').toDateString(),
            creator: 'cody',
            content: 'Looking forward to see what everyone has to share!',
            likes: 0,
        },
    ];

    return (
        <>
            <div className="bg-blue-100">
                <div className="flex justify-between p-4 text-white max-w-[70rem] mx-auto">
                    <span className="font-bold">Social</span>
                    <Link href="/" className="hover:text-orange-100">
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            <div className="flex p-4 gap-x-4 max-w-[70rem] mx-auto">
                <Nav user="guest" />

                {/* TODO: Container for the different sections */}
                <div className="max-w-[100rem] mx-auto">
                    <h1 className="text-lg text-center mb-4">All Posts</h1>

                    <div
                        className="flex flex-col gap-y-4 mb-4 p-2
                        border border-grey-100 rounded-xl"
                    >
                        <textarea
                            className="p-2 border border-grey-100 rounded-lg"
                            placeholder="What is happening?!"
                        />
                        <button className="w-max m-auto p-2 text-white bg-blue-100 rounded-lg hover:bg-opacity-80">
                            Post
                        </button>
                    </div>

                    <div className="space-y-4">
                        {initialPosts.map((post) => (
                            <div key={post.id} className="space-y-4 p-4 rounded-xl shadow-md">
                                <div className="flex justify-between">
                                    <span className="font-bold">{post.creator}</span>
                                    <span className="text-grey-100">{post.date}</span>
                                </div>
                                <p>{post.content}</p>
                                <button
                                    className="text-grey-100 space-x-2 hover:text-red"
                                    onClick={() =>
                                        console.log(`Increment post id: ${post.id} by 1`)
                                    }
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>{post.likes}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Social;