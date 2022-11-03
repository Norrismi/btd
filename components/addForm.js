import React from 'react'

const addForm = () => {
    return (
        <div className="flex justify-center p-4 ">
            <div className="flex flex-col p-8 bg-slate-300  rounded-lg drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60   ">

                <h1 className='my-4 text-center'>Add your gems</h1>

                <div className="flex justify-center my-4 w-auto">
                    <input className='flex rounded-lg mr-2 p-2' type="text" placeholder="Gem" />
                    <button className='flex rounded-lg px-4 py-2 bg-[#ef6461]'>+</button>
                </div>
            </div>


        </div>
    )
}

export default addForm