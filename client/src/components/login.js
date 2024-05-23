import * as React from "react";


export default function Login(){
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
            <div className="text-center text-5xl font-semibold">
                <span className="block lg:inline">Bienvenido</span>
                <span className="block lg:inline"> a </span>
                <span className="block lg:inline">Lost&Found</span>
            </div>
            <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your credentials.</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                        placeholder="Enter your email" />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' 
                        placeholder="Enter your password" />
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input
                            type="checkbox"
                            id="remember"
                        />
                        <label className="ml-2 font-medium text-base" for="remember"> Remember me</label>
                    </div>
                    <button className="font-medium text-base text-violet-500">Forgot Password</button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl bg-violet-500 text-white text-lg fonto-bold">Sign in</button>
                    <button>Sign in with Microsoft</button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">Don't have an account?</p>
                    <button className="text-violet-500 text-base font-medium ml-2">Sign up</button>
                </div>
            </div>
            
        </div>
    )
}