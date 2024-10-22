import React from 'react'

const SidebarCard = ({data}) => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm text-blue-500 font-semibold">Albums</h2>
                    <button onClick={() => openModal('albums')} className="bg-blue-500 text-white p-2 text-xs rounded-lg">
                        + New Album
                    </button>
                </div>

                <div className="mt-4">
                    <ul>
                        {data.map((item, i) => <li key={i} className="flex items-center text-sm text-gray-600 font-semibold">
                            <img className='h-14 w-14 mx-5 my-1 rounded-xl' src='/makerbleborderlogo.png' alt="markable" />
                            {item}</li>)}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default SidebarCard