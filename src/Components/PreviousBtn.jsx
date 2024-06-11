import React from 'react'
import { useNavigate } from 'react-router-dom'

const PreviousBtn = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate (-1)} className="border-3 border-[#BC6949] w-50 py-2 font-semibold text-black rounded-[27px] no-underline">
            Previous page
        </button>
    )
}

export default PreviousBtn
