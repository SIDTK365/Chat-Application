import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as YourSvg } from './svg-img.svg';
import LottieAnimation from "../../Lottie";
import chatimg from '../../chat-img.json'

const Join2 = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div class="max-w-5xl bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
                {/* style="max-width:1000px" */}
                <div class="md:flex w-full">
                {/* bg-indigo-500 */}
                    <div class="hidden md:block w-1/2 bg-indigo-600 py-10 px-10">
                        {/* <YourSvg /> */}
                        <LottieAnimation lotti={chatimg} />
                    </div>
                    <div class="bg-gray-800 w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div class="text-center mb-10">
                            <h1 class="font-extrabold text-3xl text-white">JOIN</h1>
                            <p className="text-gray-400">Enter your information to start chatting</p>
                        </div>
                        <div>
                            {/* <div class="flex -mx-3">
                                <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">First name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                                    </div>
                                </div>
                                <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">Last name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                                    </div>
                                </div>
                            </div> */}
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1 text-gray-300">Enter Your Name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-black" placeholder="Lorem Ipsum" onChange={(event) =>
                                            setName(event.target.value)
                                        } />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1 text-gray-300">Enter Room Name</label>
                                    <div class="flex">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-black" placeholder="Raging Bulls" onChange={(event) =>
                                            setRoom(event.target.value)
                                        } />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <Link
                                        onClick={(event) =>
                                            !name || !room ? event.preventDefault() : null
                                        }
                                        to={`/chat?name=${name}&room=${room}`}
                                    >
                                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" type="submit" >JOIN</button>
                                    </Link>
                                    {/* <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">JOIN</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join2;