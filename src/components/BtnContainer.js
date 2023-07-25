import React from 'react'

const BtnContainer = (props) => {
    {
        if(props.status === 0){
            return <div className='text-center'>
                    <button onClick={props.start} className='rounded-full bg-teal-400 px-4 py-2 mt-[5%] shadow-lg'>Start</button>
                    </div>
        }
        else if(props.status === 1){
            return <div className='flex justify-center gap-12 mt-[5%]'>
                <div className='text-center'>
                    <button onClick={props.pause} className='rounded-full bg-teal-400 px-4 py-2 shadow-lg'>Pause</button>
                </div>
                <div className='text-center'>
                    <button onClick={props.reset} className='rounded-full bg-teal-400 px-4 py-2 shadow-lg'>Reset</button>
                </div>
            </div>
        }
        
    }
}

export default BtnContainer


