import InputForm from './InputForm'
import { useContext } from 'react'
import { FormData } from '../App.js'

const ErrorMsg = {
    required: '필수 정보입니다.',
    invalidId:
        '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
    invalidComfirmPw: '비밀번호가 일치하지 않습니다.',
}

const checkId = (value) => {
    const validId = /^([a-z]|[0-9]|_|-){5,20}$/g
    return validId.test(value)
}

const checkPassword = (value) => {
    const validPw = /^([a-z]|[0-9]){8,16}$/gi
    return validPw.test(value)
}

const Form = ({ modalRef }) => {
    const { formData } = useContext(FormData)

    const confirmPassword = (value) => {
        return formData.pw === value
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            checkId(formData.id) &&
            checkPassword(formData.pw) &&
            confirmPassword(formData['pw-check'])
        ) {
            modalRef.current.showModal()
        }
    }

    return (
        <form
            id="form"
            className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <InputForm
                id={'id'}
                label={'아이디'}
                inputProps={{
                    className:
                        'shadow border rounded w-full py-2 px-3 text-gray-700',
                    type: 'text',
                    placeholder: '아이디를 입력해주세요.',
                }}
                checkValue={checkId}
                msgId={'id-msg'}
                errorMsg={{
                    required: ErrorMsg.required,
                    invalid: ErrorMsg.invalidId,
                }}
            />
            <InputForm
                id={'pw'}
                label={'비밀번호'}
                inputProps={{
                    className:
                        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight',
                    type: 'password',
                    placeholder: '비밀번호를 입력해주세요',
                    autoComplete: 'off',
                }}
                checkValue={checkPassword}
                msgId={'pw-msg'}
                errorMsg={{
                    required: ErrorMsg.required,
                    invalid: ErrorMsg.invalidPw,
                }}
            />
            <InputForm
                id={'pw-check'}
                label={'비밀번호 확인'}
                inputProps={{
                    className:
                        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight',
                    type: 'password',
                    placeholder: '비밀번호를 입력해주세요',
                    autoComplete: 'off',
                }}
                checkValue={confirmPassword}
                msgId={'pw-check-msg'}
                errorMsg={{
                    required: ErrorMsg.required,
                    invalid: ErrorMsg.invalidComfirmPw,
                }}
            />
            <div className="flex items-center justify-center">
                <input
                    id="submit"
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                    value="가입하기"
                />
            </div>
        </form>
    )
}

export default Form
