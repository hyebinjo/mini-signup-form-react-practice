import { useState, useEffect } from 'react'

const html = document.querySelector('html')
const initialFontSizeNum = parseFloat(window.getComputedStyle(html).fontSize)

const FontControlBox = () => {
    const [fontSize, setFontSize] = useState(initialFontSizeNum)

    const handleClick = (type) => {
        if (type === 'increase') {
            setFontSize((prev) => prev + 1)
        } else setFontSize((prev) => prev - 1)
    }

    useEffect(() => {
        html.style.fontSize = `${fontSize}px`
    }, [fontSize])
    return (
        <aside id="font-control-box" className="flex fixed bottom-0 right-0">
            <button
                id="increase-font-btn"
                className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
                onClick={() => handleClick('increase')}
                disabled={fontSize >= 20}
            >
                +
            </button>
            <button
                id="decrease-font-btn"
                className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
                onClick={() => handleClick('decrease')}
                disabled={fontSize <= 12}
            >
                -
            </button>
        </aside>
    )
}
export default FontControlBox
