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
                            <a target={'_blank'}><img className="w-10 hover:bg-gray-300 hover:shadow-lg transition duration-200" src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg" /></a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ErMunu/" target={'_blank'} prefetch={false}>
                            <a target={'_blank'}><img className="w-10 hover:bg-blue-200 hover:shadow-lg transition duration-200" src="https://cdn.cdnlogo.com/logos/l/78/linkedin-icon.svg" /></a>
                        </Link>
                        <Link href="https://twitter.com/ErMunu" target={'_blank'} prefetch={false}>
                            <a target={'_blank'}><img className="w-10 hover:bg-blue-200 hover:shadow-lg transition duration-200" src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg" /></a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCH5DZb07uKjngrlzQPwd0ag" target={'_blank'} prefetch={false}>
                            <a target={'_blank'}><img className="w-10 hover:bg-red-200 hover:shadow-lg transition duration-200" src="https://img.icons8.com/color/240/000000/youtube--v1.png" /></a>
                        </Link>
                        <Link href="https://www.facebook.com/ErMunu/" target={'_blank'} prefetch={false}>
                            <a target={'_blank'}><img className="w-10 hover:bg-blue-200 hover:shadow-lg transition duration-200" src="https://cdn.cdnlogo.com/logos/f/83/facebook.svg" /></a>
                        </Link>
                        <Link href="https://www.instagram.com/ErMunu/" target={'_blank'} prefetch={false}>
                            <a target={'_blank'}><img className="w-10 hover:bg-pink-200 hover:shadow-lg transition duration-200" src="https://cdn.cdnlogo.com/logos/i/4/instagram.svg" /></a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </header>
)

export default Header
