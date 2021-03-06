import { useState, useEffect, useRef, useContext } from 'react'
import { FormData } from '../App.js'

const InputForm = ({ id, label, inputProps, checkValue, msgId, errorMsg }) => {
    const inputRef = useRef(null)
    const { setFormData } = useContext(FormData)
    const [error, setError] = useState()

    const validate = () => {
        if (!inputRef.current.value) {
            inputRef.current.classList.add('border-red-600')
            setError(errorMsg.required)
        } else if (!checkValue(inputRef.current.value)) {
            inputRef.current.classList.add('border-red-600')
            setError(errorMsg.invalid)
        } else {
            inputRef.current.classList.remove('border-red-600')
            setError(null)
        }
    }
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
            <input
                id={id}
                {...inputProps}
                ref={inputRef}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [id]: e.target.value }))
                }
                onBlur={() => validate()}
            />
            <div id={msgId} className="mt-1 mb-3 text-xs text-red-500">
                {error}
            </div>
        </div>
    )
}
export default InputForm
