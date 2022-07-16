import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
    <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0">
        <div className="max-w-5xl mx-auto px-6">
            <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                    <img src="/master-muntazir-logo.png" className="w-48" alt="React Bricks" />
                    <div className="sm:ml-8 flex space-x-5 text-center">
                        <Link href="/">
                            <a className="text-gray-500 hover:text-pink-700">Home</a>
                        </Link>
                        <Link href="/projects">
                            <a className="text-gray-500 hover:text-pink-700">Projects</a>
                        </Link>
                        <Link href="/certificates">
                            <a className="text-gray-500 hover:text-pink-700">Certificates</a>
                        </Link>
                        <Link href="/blog">
                            <a className="text-gray-500 hover:text-pink-700">Blogs</a>
                        </Link>
                    </div>


                    <div className="sm:ml-8 flex space-x-5 text-center">
                        <Link href="https://github.com/ermunu" prefetch={false}>
                            <a className="py-2 px-5 rounded text-white font-medium bg-gray-500 hover:bg-gray-600 hover:shadow-lg transition duration-200">
                                G
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ErMunu/" prefetch={false}>
                            <a className="py-2 px-5 rounded text-white font-medium bg-blue-500 hover:bg-blue-600 hover:shadow-lg transition duration-200">
                                L
                            </a>
                        </Link>
                        <Link href="https://twitter.com/ErMunu" prefetch={false}>
                            <a className="py-2 px-5 rounded text-white font-medium bg-blue-300 hover:bg-blue-400 hover:shadow-lg transition duration-200">
                                T
                            </a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCH5DZb07uKjngrlzQPwd0ag" prefetch={false}>
                            <a className="py-2 px-5 rounded text-white font-medium bg-red-600 hover:bg-blue-700 hover:shadow-lg transition duration-200">
                                Y
                            </a>
                        </Link>
                        <Link href="https://www.facebook.com/ErMunu/" prefetch={false}>
                            <a className="py-2 px-5 rounded text-white font-medium bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition duration-200">
                                F
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/ErMunu/" prefetch={false}>
                            <a className="py-2 px-5 rounded text-white font-medium bg-pink-500 hover:bg-pink-600 hover:shadow-lg transition duration-200">
                                I
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </header>
)

export default Header
