import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { FormData } from '../../component/formData/page';
import Link from 'next/link';

interface ViewProfileProps {
    formData: FormData;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ formData }) => {
    const [user, setUser] = useState<FormData | null>(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('formData') || '{}');
        setUser(storedUser);
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-[60%] overflow-hidden dark:bg-gray-900 mx-auto">
            <div className="flex flex-col">
                {/* Cover Image */}
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                    alt="User Cover" 
                    className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" 
                />

                {/* Profile Image and Name */}
                <div className="sm:w-[80%] xs:w-[90%] mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <Avatar
                            alt="User Image"
                            src={user.urlImage}
                            className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                        />
                        <h2 className="w-full my-4 text-black text-3xl font-bold" style={{ marginLeft: '20px' }}>
                            {user.name}
                        </h2>

                    </div>
                    <Link href="/editProfile">
                        <button className="mt-2 px-6 py-2 bg-blue-500 text-white text-bold rounded-sm shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Edit Profile
                        </button>
                    </Link>
                </div>

                {/* Description and Details */}
                <div className="xl:w-[80%] lg:w-[90%]  md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                <p className="w-fit text-black text-lg sm:text-xl md:text-lg lg:text-xl">
                    {user.description || 'No description provided.'}
                </p>

                    {/* Display user information */}
                    <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                        <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-between">
                            <div className="flex-1">
                                <dl className="text-black divide-y divide-gray-200 dark:divide-gray-700">
                                    <div className="flex flex-col pb-3">
                                        <dt className="mb-1 text-xl text-black">Email</dt>
                                        <dd className="text-lg text-xl break-words">{user.email}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-xl text-black">Phone</dt>
                                        <dd className="text-lg text-xl">{user.phone}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="flex-1">
                                <dl className="text-black divide-y divide-gray-200 dark:divide-gray-700">
                                    <div className="flex flex-col pb-3">
                                        <dt className="mb-1 text-xl text-black">Address</dt>
                                        <dd className="text-lg text-xl">{user.address}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-xl text-black">Date of birth</dt>
                                        <dd className="text-lg text-xl">{user.dateOfBirth || 'Not provided'}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ViewProfile;
