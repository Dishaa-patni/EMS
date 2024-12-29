import React from 'react'

const Header=({data})=>{
     console.log(data)

    return(
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-medium'> Hello <br/><span className='text-3xl font-bold'>{data.firstName} 👋</span></h1>
            <button className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
        </div>
    )
}

export default Header