'use client';
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
        <section className="w-full pt-10 min-h-screen flex justify-center items-start dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 w-[40%] p-4 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mt-1">
                        <Avatar
                            alt="User Image"
                            src={user.urlImage}
                            className="rounded-full w-[12rem] h-[12rem] outline outline-2 outline-offset-2 outline-blue-500"
                        />
                    </div>

                    {/* FullName */}
                    <h2 className=" title text-2xl font-bold text-center  w-full">
                        {user.name}
                    </h2>

                    <div className="w-full flex flex-col items-center">
                        {/* Detail */}
                        <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                            <div className="w-full flex flex-col gap-2 justify-center">
                                <div className="w-full">
                                    <dl className=" dark:text-white divide-y divide-gray-200 dark:divide-gray-700">
                                        <div className="flex flex-col pb-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                            <dd className="text-gray-900 font-semibold">{user.email}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone</dt>
                                            <dd className="text-gray-900 font-semibold">{user.phone}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
                                            <dd className="text-gray-900 font-semibold">{user.address}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <Link href="/editProfile">
                        <button className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Edit Profile
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ViewProfile;
