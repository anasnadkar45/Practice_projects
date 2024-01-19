import React from 'react'
// import { filterData } from '../App'
function Filter({filterData}) {
    return (
        <div className='w-[1280px]  m-auto'>
            {
                filterData.map((data) => {
                    return <button>
                        {data.brand}
                    </button>
                })
            }
        </div>
    )
}

export default Filter
