import './App.css'
import Form from './components/Form'
import Footer from './components/Footer'
import FontControlBox from './components/FontControlBox'
import Modal from './components/Modal'
import { useState, createContext } from 'react'

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
    return (
        <FormData.Provider value={{ formData, setFormData }}>
            <section className="form-wrapper">
                <Form />
                <Footer />
            </section>
            <FontControlBox />
            <Modal />
        </FormData.Provider>
    )
}

export default App
