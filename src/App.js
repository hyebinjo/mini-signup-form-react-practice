import './App.css'
import Form from './components/Form'
import Footer from './components/Footer'
import FontControlBox from './components/FontControlBox'
import Modal from './components/Modal'
import { useState, createContext, useRef } from 'react'

const initialFormData = {
    id: '',
    pw: '',
    'pw-check': '',
}

export const FormData = createContext({
    formData: initialFormData,
    setFormData: () => {},
})

function App() {
    const [formData, setFormData] = useState(initialFormData)
    const modalRef = useRef(null)
    return (
        <FormData.Provider value={{ formData, setFormData }}>
            <section className="form-wrapper">
                <Form modalRef={modalRef} />
                <Footer />
            </section>
            <FontControlBox />
            <Modal ref={modalRef} />
        </FormData.Provider>
    )
}

export default App
