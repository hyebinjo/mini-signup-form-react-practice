import { useEffect, useRef } from 'react'

const InputForm = ({ id, label, inputProps }) => {
    const inputRef = useRef(null)
    useEffect(() => {
        if (id === 'id') inputRef.current.focus()
    }, [])
    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={id}
            >
                {label}
            </label>
            <input id={id} {...inputProps} ref={inputRef} />
            <div className="mt-1 mb-3 text-xs text-red-500"></div>
        </div>
    )
}
export default InputForm
